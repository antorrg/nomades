import { Product, Item, sequelize } from "../db.js";
import eh from '../utils/errorHandlers.js'
import { oldImagesHandler, deleteFromCloudinary } from "./storage.js";
import NodeCache from "node-cache";
import help from "./helpers.js";

const cache = new NodeCache({ stdTTL: 1800 }); // TTL (Time To Live) de media hora

export default {
createProduct : async (title1, landing1, info_header1, info_body1, items1 ) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        const product = await Product.findOne({
            where:{title : title1

            }, transaction
        });
        if(product){eh.throwError('Este titulo ya existe', 400)};
        const newProduct = await Product.create({
            title:title1,
            landing: landing1,
            info_header:info_header1,
            info_body:info_body1,
        },{transaction});  
        const createdItems = await Promise.all(
            items1.map(async(item)=> {
                const newItem = await Item.create({
                    img : item.img,
                    text: item.text,
                },{transaction})

            await newProduct.addItem(newItem, {transaction})    
            return newItem;
            })
        );
        await transaction.commit()
        return {info: newProduct,
               items: createdItems}
    } catch (error) {
        if (transaction) { await transaction.rollback();}; throw error;}
},

addNewItem: async (img, text, id) => {
try {
    const productFound = await Product.findByPk(id);
    if(!productFound){eh.throwError('Ocurrio un error, objeto no encontrado', 404)};
    const newItem = await Item.create({
        img:img,
        text: text,})
    await productFound.addItem(newItem)
    return { message: "Item creado exitosamente"}
} catch (error) {throw error;}
},

getProduct : async () => {
    try {
        let products = cache.get('products');
        if (products) {
                       return {products: products,
                               cache: true 
                              }
                        }// Devolver los datos en caché si existen}
        const dataFound = await Product.findAll({
             include :[{
                model: Item,
                attributes:['id', 'img', 'text', 'ProductId'],
           },],
        })
        if(!dataFound){eh.throwError('Dato no hallado', 404)}
        if(dataFound.length === 0)return help.dataEmptyPage()
        const data = help.productCleaner(dataFound, false)
        cache.set('products', data);
        return {products: data,
                cache: false
                }
    } catch (error) {throw error;}
},
getById : async (id) => {
    try {
        const data = await Product.findByPk(id,{
            where:{
                deleteAt:false,
            },
                include : [{
                    model: Item,
                    attributes: ['id', 'img', 'text', 'ProductId'],
                }]
        })
        if(!data){eh.throwError('Dato no hallado', 404)}
        const dataFound = help.productCleaner(data, true)
        return dataFound
    } catch (error) {throw error;}
},
getDetail : async (id) => {
    try {
        const itemFound = await Item.findByPk(id,{
            where: {enable:true,}});
        if(!itemFound){eh.throwError('Dato no hallado', 404)}
        const item = help.aux(itemFound, true)
        return item;
    } catch (error) {throw error;}
},
updProduct : async (id, newData) => {
    const options = help.optionImage(newData.saver)
    let imageStore = "";
    try {
        const productFound = await Product.findByPk(id);
        if(!productFound){eh.throwError('Error inesperado, dato no hallado!',404)}
        if(productFound.landing !== newData.landing){
            imageStore = productFound.landing
        }
        const parsedData = {
            title: newData.title,
            logo: newData.logo,
            landing: newData.landing,
            info_header: newData.info_header,
            info_body: newData.info_body,
            url: newData.url,
            enable: Boolean(newData.enable),
            deleteAt: Boolean(newData.deleteAt)}
        const productUpd = await productFound.update(parsedData)
        const pictureOld = await oldImagesHandler(imageStore, options)
        if(pictureOld.success===false){eh.throwError('Error al procesar imagen antigua', 500)}
        if (productUpd) {
            cache.del('products');
            }
        return productUpd;
    } catch (error) {throw error;}
},

updItem: async (id, newData)=>{
    const options = help.optionImage(newData.saver)
    let imageStore = "";
    try {
        const itemFound = await Item.findByPk(id);
    if(!itemFound){eh.throwError('Error inesperado, item no hallado!',404)}
    if(itemFound.img !== newData.img){
        imageStore = itemFound.img;
    }
    const parsedData = {
        img: newData.img,
        text: newData.text,
        enable: Boolean(newData.enable)}
    const itemUpd = itemFound.update(parsedData)
    const pictureOld = await oldImagesHandler(imageStore, options)
     if(pictureOld.success===false){eh.throwError('Error al procesar imagen antigua', 500)}
    return itemUpd
    } catch (error) {throw error;}
},

delProduct: async (id) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        
        // Buscar el Producto
        const product = await Product.findByPk(id, { transaction });
        if (!product) {
            eh.throwError('Producto no hallado', 404);
        }

        // Obtener todas las imágenes de items antes del borrado
        const itemImages = await imageItemCapture(id);
        
        // Borrar todos los Items asociados
        await Item.destroy({
            where: { ProductId: id },
            transaction
        });

        // Borrar el Producto
        await product.destroy({ transaction });

        // Después de operaciones exitosas en DB, borrar imágenes de Cloudinary
        const deletePromises = [
            // Borrar imagen principal del producto
            deleteFromCloudinary(product.landing),
            // Borrar todas las imágenes de items
            ...itemImages.map(imgUrl => deleteFromCloudinary(imgUrl))
        ];

        const results = await Promise.allSettled(deletePromises);
        
        // Verificar si hubo fallos en los borrados
        const fallosEnBorrado = results.filter(result => result.status === 'rejected');
        if (fallosEnBorrado.length > 0) {
            console.error('Algunas imágenes no se pudieron borrar de Cloudinary:', fallosEnBorrado);
            // Puedes querer registrar estos fallos pero no fallar toda la operación
        }

        await transaction.commit();
        return { 
            message: 'Producto y sus items asociados borrados exitosamente',
            imagenesBorradas: results.filter(r => r.status === 'fulfilled').length
        };

    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw error;
    }
},

delItem: async (id) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        // Buscar el Item
        const item = await Item.findByPk(id);
        if (!item) {
            eh.throwError('Item no hallado', 404);
        }

        // Borrar el Item de la base de datos
        await item.destroy({ transaction });

        // Borrar la imagen de Cloudinary
        const resultadoCloudinary = await deleteFromCloudinary(item.img);
        if (!resultadoCloudinary) {
            // Registrar el error pero no fallar la operación
            console.error('Advertencia: No se pudo borrar la imagen de Cloudinary:', item.img);
        }

        await transaction.commit();
        return {
            message: 'Item borrado exitosamente',
            imagenBorrada: !!resultadoCloudinary
        };

    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw error;
    }
}
};
async function imageItemCapture (id){
    try {
        const data = await Item.findAll({
            where:{
                ProductId : id,
                attributes: ['img']
            },
        })
        if(!data){eh.throwError('Error inesperado', 500)}
        return data.map(item => item.img);
    } catch (error) {
        throw error
    }
   
}