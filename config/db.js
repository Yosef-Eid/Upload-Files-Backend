import mongoose from "mongoose";

export default async function connectDb() {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connecting database');

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}