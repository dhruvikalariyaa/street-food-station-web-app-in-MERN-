import express from 'express';
import { addFood, listFood, removeFood, editFood } from '../controllers/foodController.js';
import multer from 'multer';
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single('image'),addFood);
foodRouter.post("/remove",removeFood);
foodRouter.post("/edit",upload.single('image'),editFood);
export default foodRouter;