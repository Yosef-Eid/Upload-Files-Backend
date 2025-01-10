# Simple Image Upload Application

This is a basic Node.js application that demonstrates how to upload images using `multer`. The application supports:

- Uploading a **single image**.
- Uploading **multiple images**.
- Restricting uploaded files to specific types (e.g., JPEG, PNG, GIF).

## Features

1. **Single Image Upload**:
   - Users can upload a single image.
   - The uploaded image is saved to a local directory (`/images`).
   
2. **Multiple Images Upload**:
   - Users can upload multiple images at once.
   - All uploaded images are saved to the `/images` directory.

3. **File Type Restriction**:
   - Only images with the following extensions are allowed:
     - `.jpeg`
     - `.jpg`
     - `.png`
     - `.gif`
   - If a file of a different type is uploaded, an error is returned.

---
