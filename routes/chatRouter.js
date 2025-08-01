import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  addConverstion,
  createChat,
  getAllChats,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats);
router.post("/:id", isAuth, addConverstion);

export default router;
