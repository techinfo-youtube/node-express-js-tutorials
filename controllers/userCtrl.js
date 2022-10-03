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

module.exports = { getUser, addUser, createUser };
