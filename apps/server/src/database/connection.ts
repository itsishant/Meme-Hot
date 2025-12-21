import mongoose from "mongoose";
import type { IDb } from "../interface/db.interface.js";
import dotenv from "dotenv";
dotenv.config();

const dbConfig: IDb = {
  MONGODB_URI: process.env.MONGODB_URI,
};

const connectToDatabase = async () => {
  try {
    if (!dbConfig.MONGODB_URI) {
      return console.log("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(dbConfig.MONGODB_URI);
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export { connectToDatabase };
