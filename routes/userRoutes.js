const express = require("express");
const { getUser, addUser, createUser } = require("../controllers/userCtrl");

//routes router object
const router = express.Router();

//routes

//CREATE NEW USER
router.post("/create-user", createUser);

//GET USER ||  METHOD = GET
router.get("/", getUser);

//POST USER || METHOD POST
router.post("/add-user", addUser);

//export routes
module.exports = router;
