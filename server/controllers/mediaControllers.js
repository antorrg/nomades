import eh from "../utils/errorHandlers.js";
import * as imgs from "../services/storage.js";

export default {
  getImagesController: eh.catchAsync(async (req, res) => {
    const response = await imgs.getImages();
    res.status(200).json(response);
  }),
  deleteImagesController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await imgs.deleteImage(id);
    res.status(200).json(response);
  }),
};
