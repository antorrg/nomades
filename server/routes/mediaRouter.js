import express from 'express'
import media from '../controllers/mediaControllers.js'
import auth from '../middlewares/validation/index.js'

const mediaRouter = express.Router()

mediaRouter.get('/media/imgs', auth.verifyToken, media.getImagesController)

mediaRouter.delete('/media/imgs/:id', auth.verifyToken, media.deleteImagesController)

mediaRouter.post('/media/videos/create', auth.verifyToken, media.createMediaController)

mediaRouter.get('/media/videos',  media.getMediaController)//Ruta libre

mediaRouter.get('/media/admin/videos',auth.verifyToken, media.getAdminMediaController)

mediaRouter.get('/media/videos/:id',  media.getByIdMediaController)

mediaRouter.put('/media/videos/update/:id',  auth.verifyToken, media.updateMediaController)

mediaRouter.delete('/media/videos/:id',  media.deleteMediaController)

export default mediaRouter;