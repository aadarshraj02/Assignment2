import mongoose from "mongoose"; //imported mongoose


//async function to connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/allGames");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default connectDB;
