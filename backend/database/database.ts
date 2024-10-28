import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });
const databaseString: any = process.env.MONGO_URI;
console.log(databaseString);
const connectionOtpions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(databaseString, connectionOtpions);
    console.log("Database connected");
  } catch (error) {
    console.log(`Failed to connect database`);
  }
};
