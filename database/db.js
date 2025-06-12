import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db_url, {
      dbName: "AI-chatbot",
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
