const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling UnGot Exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to uncaught Exception");
  process.exit(1);
});

const port = process.env.PORT || 8001;

// config
dotenv.config({ path: "./config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(port, () => {
  console.log(`Server is working.... on port ${port}`);
});

// UnHandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(err);
  });
});
