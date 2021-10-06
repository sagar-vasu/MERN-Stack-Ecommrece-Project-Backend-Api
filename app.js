const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleWare = require("./middlewares/error");

const app = express();
app.use(express.json());
app.use(cookieParser());

// all routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

// Middleware for errors
app.use(errorMiddleWare);

app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
