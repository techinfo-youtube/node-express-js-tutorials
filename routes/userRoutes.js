const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
} = require("../controllers/userCtrl");

//routes router object
const router = express.Router();

//routes

//CREATE NEW USER
router.post("/create-user", createUser);

//GET ALL USERS
router.get("/get-users", getAllUsers);

//GET SINGLE USER
router.get("/get-users/:id", getSingleUser);

//export routes
module.exports = router;
