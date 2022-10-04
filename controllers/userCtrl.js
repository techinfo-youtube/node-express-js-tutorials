const UserModel = require("../models/userModel");

const getUser = (req, res) => {
  res.send({
    success: true,
    message: "Data Coming From MVC Pattern",
  });
};

const addUser = (req, res) => {
  const { inputData } = req.body;
  res.json({
    success: true,
    message: `Welcome ${inputData}`,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`errro in create user ctrl = ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "get all user error",

      error: error.message,
    });
  }
};

//GET SINGLE USER
const getSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(400).send("User Not Found");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Single User Error",
      error: error.message,
    });
  }
};
module.exports = { createUser, getAllUsers, getSingleUser };
