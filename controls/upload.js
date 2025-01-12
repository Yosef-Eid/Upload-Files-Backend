import { MultipleUpload, Upload } from '../model/uploadSchema.js'
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

export const upload = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    try {
        const result = await cloudinary.uploader.upload(req.file.path, { folder: 'upload' })
        fs.unlinkSync(req.file.path)
        const image = await new Upload({ image: result.secure_url }).save()
        res.status(201).json(image)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const mutuleUpload = async (req, res) => {
    if (!req.files || req.files.length === 0) return res.status(400).json({ message: "No files uploaded" });
    
    try {
        const files = req.files.map(file => file.path)
        const file = files.map(async file => await cloudinary.uploader.upload(file, { folder: 'upload' }))
        const result = await Promise.all(file)
        req.files.forEach(file => fs.unlinkSync(file.path));
        const images = result.map(result => result.secure_url);
        const savedImages = await new MultipleUpload({ images }).save();
        res.status(201).json(savedImages)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
