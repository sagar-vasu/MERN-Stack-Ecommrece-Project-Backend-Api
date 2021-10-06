const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(
        `Mongo DB Connected With Server Data: ${data.connection.host} `
      );
    });
};

module.exports = connectDatabase;
