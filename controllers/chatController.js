import { Chat } from "../models/Chat.js";
import { Converstion, Converstion } from "../models/Converstion.js";

export const createChat = async (req, res) => {
  try {
    const userId = req.user._id;

    const chat = await Chat.create({
      user: userId,
    });
    res.json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user._id }).sort({
      createAt: -1,
    });
    res.json(chats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addConverstion = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat)
      return res.status(404).json({
        message: "no chat with this id",
      });

    const converstion = await Converstion.create({
      chat: chat._id,
      question: req.body.question,
      answer: req.body.answer,
    });
    const updateChat = await Chat.findByIdAndUpdate(
      req.params.id,
      { latestMessage: req.body.answer },
      { new: true }
    );
    res.json({
      Converstion,
      updateChat,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
