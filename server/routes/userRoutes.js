import express from "express";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import protectRoute from "../Middleware/authMiddleware.js";

const userRoutes = express.Router();
// redefine expiresIn

const genToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "60d" });
};

// login user
const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(404);
    throw new Error("Invalid email or password");
  }
});

// post register user
// asyncHandler giving change to show error to the client side

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
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
      _id: user._id,
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

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser.name,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: genToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
userRoutes.route("/login").post(logInUser);
userRoutes.route("/register").post(registerUser);
userRoutes.route("/profile/:id").put(protectRoute, updateUserProfile);

export default userRoutes;
