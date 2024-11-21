import express from 'express'
import media from '../controllers/mediaControllers.js'

const mediaRouter = express.Router()

mediaRouter.get('/media/imgs', media.getImagesController)

mediaRouter.delete('/media/imgs/:id', media.deleteImagesController)

mediaRouter.post('/media/videos/create', media.createMediaController)

mediaRouter.get('/media/videos',  media.getMediaController)//Ruta libre

mediaRouter.get('/media/admin/videos', media.getAdminMediaController)

export default mediaRouter;