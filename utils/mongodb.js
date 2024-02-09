// utils/mongodb.js

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const uri =
      "mongodb+srv://subhro:shaswata123@cluster0.mkj0vuv.mongodb.net/";
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const connection = await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
