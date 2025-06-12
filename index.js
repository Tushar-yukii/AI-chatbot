import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(` server is working on port ${process.env.PORT}`);
  connectDb();
});
