import express from "express";
import User from "../models/User";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const userRouter = express.Router();
// redefine expiresIn

const genToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "60d" });
};

const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user_id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(404);
  }
  throw new Error("Invalid email or password");
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await user.findOne({ tmail });
  if (userExist) {
    res.status(404);
    throw new Error("We already have an account with that email address. ");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user_id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.json(400);
    throw new Error("Invalied user data");
  }
});

userRoutes.route("/login").post(logInUser);
userRoutes.route("/register").post(registerUser);

export default userRoutes;
