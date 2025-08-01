import express from "express";
import {
  loginUser,
  myProfile,
  verifyUser,
} from "../controllers/usercontrollers.js";
import { isAuth } from "../middlewares/isAuth.js";
// import { isAuth } from "../middlewares/isAUTH.JS";

const router = express.Router();

router.post("login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);
// router.get("/me", isAuth, myProfile);
export default router;
