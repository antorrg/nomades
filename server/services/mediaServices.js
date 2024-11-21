import { Media } from "../db.js";
import eh from '../utils/errorHandlers.js'
import help from "./helpers.js";

export default {
    createMedia : async(newData)=>{
        try {
            const media = await Media.findOne({
                where:{title: newData.title}
            });
            if(media){eh.throwError('Este titulo ya existe', 400)}
            const newMedia = await Media.create({
                title: newData.title,
                type: newData.type,
                text : newData.text,
                url : newData.url,
                enable: true,
            });
            return newMedia;
        } catch (error) {
            throw error;
        }
    }, 
    getMedia : async(isAdmin)=>{
        try {
            const media = await Media.findAll({
                raw:true,
                where: isAdmin? {}: { enable: true }
            })
            if(media.length===0){eh.throwError('Elemento no hallado', 404)}
            return media;
        } catch (error) {
            throw error;
        }
    },
    getMediaById : async(id)=>{
        try {
            
        } catch (error) {
            throw error;
        }
    },
    updateMedia : async(id, newData)=>{
        try {
            
        } catch (error) {
            throw error;
        }
    },
    deleteMedia : async(id)=>{
        try {
            
        } catch (error) {
            throw error;
        }
    }
}