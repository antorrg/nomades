import {About} from '../db.js'
import eh from '../utils/errorHandlers.js'
import * as cloud from './storage.js'
import help from './helpers.js'

export default {
    createAbout : async(newData)=>{
        try {
            const article = await About.findOne({where: {title: newData.title}})
            if(article){eh.throwError('Este titulo ya existe', 400)}
            const newArticle =  await About.create({
                    title: newData.title,
                    text: newData.text,
                    image: newData.image
            });
            return newArticle;
        } catch (error) {
        throw error;
        }
    },
    getAbout : async(admin)=>{
        try {
            const article = await About.findAll({
                raw:true,
                where: admin ? {} :{ enable: true },
            })
            if(!article){eh.throwError('Error server', 500)}
            if(article.length===0){return [{id: 1, title: 'No hay titulo', text: 'No hay texto', image: '', enable: false, imgShow: false}]}
            return article;
        } catch (error) {
        throw error;
        }
    },
    aboutById: async(id)=>{
        try {
            const article = await About.findByPk(id)
            if(!article){eh.throwError('Articulo no hallado',404)}
            return article;
        } catch (error) {
        throw error;
        }
    },
    updAbout : async(id)=>{
        const options = help.optionImage(newData.saver)
        const useImgs = help.optionImage(newData.useImg)
        const enabledParsed = help.optionImage(newData.enable)
        const imgShowParsed = help.optionImage(newData.imgShow)
        let imageStore = "";
        try {
            const article = await About.findByPk(id)
            if(!article){eh.throwError('Articulo no hallado',404)}
            if(article.image !== newData.image){imageStore = article.image}
            if(useImgs){await cloud.deleteImage(newData.image)}
            const newarticle = {
                title: newData.title,
                text: newData.text,
                image: newData.image,
                enable: enabledParsed,
                imgShow: imgShowParsed,
            }
            const updarticle = article.update(newarticle)
            const pictureOld = await cloud.oldImagesHandler(imageStore, options)
            if(pictureOld.success===false){eh.throwError('Error al procesar imagen antigua', 500)}
            return updarticle;
        } catch (error) {
        throw error;
        }
    },
    delAbout : async(id)=>{
        try {
            const article = await About.findByPk(id)
            if(!article){eh.throwError('Articulo no hallado',404)}
            await article.destroy();
            const resultadoCloudinary = await cloud.deleteFromCloudinary(article.image);
             if (!resultadoCloudinary) {
            // Registrar el error pero no fallar la operación
            console.error('Advertencia: No se pudo borrar la imagen de Cloudinary:', article.image);
             }
             return {
                message: 'Item borrado exitosamente',
                imagenBorrada: !!resultadoCloudinary
            };
        } catch (error) {
        throw error;
        }
    }
}