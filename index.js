import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";

dotenv.config();
const app = express();

//using middleware
app.use(express.json());

// importing router
import userRouters from "./routes/userRouter.js";

// using router
app.use("/api/user",userRouters);

app.listen(process.env.PORT, () => {
  console.log(`server is working on port ${process.env.PORT}`);
  connectDb();
});
