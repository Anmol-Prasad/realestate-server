import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.kvg8g.mongodb.net/realestate`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
