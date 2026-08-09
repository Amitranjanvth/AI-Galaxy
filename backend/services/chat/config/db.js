import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        const connect = await mongoose.connect("mongodb+srv://amit:Amit123@cluster0.1qcyvkv.mongodb.net/?appName=Cluster0");
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;