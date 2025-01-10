import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../images'))
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const name = path.basename(file.originalname, ext).replace(/\s/g, '-')
        cb(null, `${name}-${Date.now()}${ext}`)
    }
})

const filterImage = (req, file, cb) => {
    const fileTypes = /jpg|png|jpeg/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true)
    } else {
        cb(new Error("Only images are allowed"))
    }
}

export const uploadFiles = multer({
    storage,
    fileFilter: filterImage
})