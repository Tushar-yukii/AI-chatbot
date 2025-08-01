import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    question: {
      type: String,
      required:true,
    },
     answer: {
      type: String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);

export const Converstion = mongoose.model("Converstion", Schema);
