const express = require("express");
const { getUser, addUser } = require("../controllers/userCtrl");

//routes router object
const router = express.Router();

//routes

//GET USER ||  METHOD = GET
router.get("/", getUser);

//POST USER || METHOD POST
router.post("/add-user", addUser);

//export routes
module.exports = router;
