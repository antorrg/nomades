import {Work} from '../db.js'
import eh from '../utils/errorHandlers.js'
import * as cloud from './storage.js'
import help from './helpers.js'



export default {
    createWork : async(newData)=>{
        try {
            const work = await Work.findOne({where: {title: newData.title}})
            if(work){eh.throwError('Este titulo ya existe', 400)}
            const newArticle =  await Work.create({
                    title: newData.title,
                    text: newData.text,
                    image: newData.image
            });
            return newArticle;
        } catch (error) {
        throw error;
        }
    },
    getWork : async()=>{
        try {
            const work = await Work.findAll()
            if(!work){eh.throwError('Error server', 500)}
            if(work.length===0){return [{id: 1, title: 'No hay titulo', text: 'No hay texto', image: ''}]}
            return work;
        } catch (error) {
        throw error;
        }
    },
    workById: async(id)=>{
        try {
            const work = await Work.findByPk(id)
            if(!work){eh.throwError('Articulo no hallado',404)}
            return work;
        } catch (error) {
        throw error;
        }
    },
    updWork : async(id, newData)=>{
        const options = help.optionImage(newData.saver)
        const useImgs = help.optionImage(newData.useImg)
        const enabledParsed = help.optionImage(newData.enable)
        try {
            const work = await Work.findByPk(id)
            if(!work){eh.throwError('Articulo no hallado',404)}

            //Capturar imagen y resolver posible actualizacion
            const originalImage = itemFound.img;
            const isImageChanged = originalImage !== newData.img;
            if(useImgs){await cloud.deleteImage(newData.image)}
            const newWork = {
                title: newData.title,
                text: newData.text,
                image: newData.image,
                enable: enabledParsed
            }
            const updWork = work.update(newWork)
            if (isImageChanged) {
                await cloud.processImageUpdate(isImageChanged, newData.img, options);
            }
            return updWork;
        } catch (error) {
        throw error;
        }
    },
    delWork : async(id)=>{
        try {
            const work = await Work.findByPk(id)
            if(!work){eh.throwError('Articulo no hallado',404)}
            await work.destroy();
            const resultadoCloudinary = await cloud.deleteFromCloudinary(work.image);
             if (!resultadoCloudinary) {
            // Registrar el error pero no fallar la operación
            console.error('Advertencia: No se pudo borrar la imagen de Cloudinary:', work.image);
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