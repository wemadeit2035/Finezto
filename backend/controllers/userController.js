import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import useModel from "../models/userModel.js";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//route for user login
const loginUser = async () => {};

//route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    // validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter A valid Email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter A Strong Password" });
    }

    // hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
