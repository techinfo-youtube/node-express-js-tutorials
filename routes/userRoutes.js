const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
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

//UPDATE USER
router.put("/update-user/:id", updateUser);

//DELETE USER
router.delete("/delete-user/:id", deleteUser);
//export routes
module.exports = router;
