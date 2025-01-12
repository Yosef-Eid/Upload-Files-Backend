# Image Upload Backend Project

This is a backend project built with Node.js that allows image uploads with the following features:

## Features

1. **Single Image Upload**:
   - A function is provided to upload a single image.
   - The uploaded image is stored on **Cloudinary**, a cloud-based media management platform.

2. **Multiple Images Upload**:
   - A function is available to upload multiple images at once.
   - All uploaded images are stored on **Cloudinary**.

3. **File Type Restriction**:
   - Only specific image types are allowed:
     - `.jpeg`
     - `.jpg`
     - `.png`
     - `.gif`
   - If a file of a different type is uploaded, an error is returned.

4. **Cloudinary Integration**:
   - Images are uploaded directly to **Cloudinary**, which handles storage, optimization, and secure URL generation.
   - This integration ensures efficient and scalable image management.

## How It Works

- **Single Image Upload**: Send a single file through the designated endpoint to upload the image.
- **Multiple Images Upload**: Send multiple files through the designated endpoint to upload multiple images in one request.
- **Cloudinary Storage**: Uploaded images are stored in a specific folder on **Cloudinary** for better organization and easy retrieval.


  
