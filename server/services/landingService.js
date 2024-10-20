import {Landing} from '../db.js'
import eh from '../utils/errorHandlers.js'
import { oldImagesHandler } from "./storage.js";
import help from './helpers.js'

//ejemplo de implementacion eh.throwError('mensaje', 404)

export default {
    createLanding : async(title, image, info_header, description)=>{
        try {
            const page = await Landing.findOne({
                where : {title: title}
            })
            if(page){eh.throwError('Este titulo ya existe', 400)}
            const newPage = await Landing.create({
                title,
                image,
                info_header,
                description
            })
            return newPage
        } catch (error) {
            throw error;
        }
    },
    getLandings : async()=>{
        try {
            const pageFound = await Landing.findAll()
            if(!pageFound ){eh.throwError('Elemento no encontrado', 404)}
            if(pageFound.length===0){return help.dataEmptyLanding()}
            return help.cleanerLanding(pageFound, false)
        } catch (error) {
            throw error;
        }
    },
    getOneLanding : async()=>{
        try {
            const pageFound = await Landing.findOne({
                where: {
                     enable:true
                }
             })
             if(!pageFound ){return help.dataEmptyLanding()}
                    
            return help.cleanerLanding(pageFound, true)
        } catch (error) {
            throw error;
        }
    },
    getLandById : async(id)=>{
        try {
            const page = await Landing.findByPk(id)
            if(!page){eh.throwError('Elemento no encontrado', 404)}
            return page
        } catch (error) {
            throw error;
        }
    },
    updLanding : async(id, newData)=>{
        const options = help.optionImage(newData.saver)
        let imageStore = "";
        try {
            const page = await Landing.findByPk(id)
            if(!page){eh.throwError('No hallado', 404)}
            if(page.image !== newData.image){
                imageStore = page.image;
            }
            const newPage = await page.update(newData)
            const pictureOld = await oldImagesHandler(imageStore, options)
             if(pictureOld.success===false){eh.throwError('Error al procesar imagen antigua', 500)}
            return newPage;
        } catch (error) {
            throw error;
        }
    },
    delLanding : async(id)=>{
        try {
            const page = await Landing.findByPk(id)
            if(!page){eh.throwError('No hallado', 404)}
            await page.destroy(page)
            return 'Portada borrada exitosamente';
        } catch (error) {
            throw error;
        }
    },
};

