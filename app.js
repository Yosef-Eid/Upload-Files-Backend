import express from 'express';
const app = express()

import dotenv from 'dotenv';
dotenv.config()

import { mutuleUpload, upload } from './controls/upload.js';
import { uploadFiles } from './utils/uploadHandler.js';

import connectDb from './config/db.js';
connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/upload', uploadFiles.single('image'), upload)
app.post('/mutuleUpload', uploadFiles.array('images', 5), mutuleUpload)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
