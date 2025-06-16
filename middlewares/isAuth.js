import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.header.token;

    if (!token)
      return res.status(403).json({
        message: "please login",
      });
    const decode = jwt.verify(token, process.env.jwt_sec);

    req.user = await User.findById(decode._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "login First",
    });
  }
};
