import express from 'express';
const router = express.Router();
import imageController from "../controller/image-controller.js";
import { downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

router.post('/upload',upload.single('file'), imageController);
router.get('/file/:fileId',downloadImage);
export default router
