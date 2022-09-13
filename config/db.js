const mongoose = require("mongoose");
const colors = require("colors");

//function connect mongodb database

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/expresjs");
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Mongodb Errro ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
