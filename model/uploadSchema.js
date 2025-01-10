import mongoose from "mongoose";

// upload own file
const uploadSchema = new mongoose.Schema({
    image: { type: String, required: true },
})

// upload multiple file
const multipleUploadSchema = new mongoose.Schema({
    images: { type: [String], required: true },
})

export const Upload = mongoose.model("Upload", uploadSchema)
export const MultipleUpload = mongoose.model("multipleUpload", multipleUploadSchema)

