import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const auth = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // res.status(500).json(error.message);
    next(error)
    // next(errorHandler(error.status,error.message))  --custom error is used when there is no error coming
  }
};
