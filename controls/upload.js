import { MultipleUpload, Upload } from '../model/uploadSchema.js'

export const upload = async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    try {
        const result = await new Upload({ image: req.file.filename }).save()
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const mutuleUpload = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) return res.status(400).json({ message: "No files uploaded" });

        const images = req.files.map(file => file.filename)

        const result = await new MultipleUpload({images}).save();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
