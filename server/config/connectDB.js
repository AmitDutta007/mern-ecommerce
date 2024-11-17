import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config();
if (!process.env.MONGODB_URI) {
    throw new Error(
        'Provide Uri'
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Db succesfully");

    } catch (error) {
        console.log("Database connection error", error);
        process.exit(1);
    }
}

export default connectDB;