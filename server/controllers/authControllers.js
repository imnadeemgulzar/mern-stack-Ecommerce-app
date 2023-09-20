import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.send({ success: false, message: "name is required" });
    }
    if (!email) {
      return res.send({ success: false, message: "email is required" });
    }
    if (!password) {
      return res.send({ success: false, message: "password is required" });
    }
    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({
        success: false,
        message: "user already registered, please login",
      });
    }
    const user = await new userModel({
      name,
      email,
      password,
    }).save();
    return res
      .status(200)
      .send({ success: true, message: "user registered successfully", user });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ success: false, message: "email is required" });
    }
    if (!password) {
      return res.send({ success: false, message: "password is required" });
    }
    const user = await userModel.findOne({ email, password });
    if (user) {
      return res.status(200).send({
        success: true,
        message: "user logged in successfully",
        user,
      });
    }
    return res.send({ message: "check the username and password" });
  } catch (error) {
    console.log(error);
  }
};
