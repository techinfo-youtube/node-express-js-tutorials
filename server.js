//import
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/db");

//mongodb func call
connectDb();

//rest obj
const app = express();

//view =>  template engine
app.set("view engine", "pug");
app.set("views", "./views");

//middelwares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//viewRoutes
app.get("/", (req, res) => {
  res.render("firstFile");
});

//port number
const PORT = 5000;

//listener
app.listen(PORT, () => {
  console.log(`Server Running on Port = ${PORT}`.bgCyan);
});
