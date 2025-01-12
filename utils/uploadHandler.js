import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../upload'))
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const name = path.basename(file.originalname, ext).replace(/\s/g, '-')
        cb(null, `${name}-${Date.now()}${ext}`)
    }
})

const filterImage = (req, file, cb) => {
    const fileTypes = /jpg|png|jpeg|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) cb(null, true)
    else cb(new Error("Only images are allowed"))
}

export const uploadFiles = multer({
    storage,
    fileFilter: filterImage
})