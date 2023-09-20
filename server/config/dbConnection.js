import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log("connected to DB successfully");
  } catch (error) {
    console.log("error in DB connection");
  }
};
