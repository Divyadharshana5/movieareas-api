import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
