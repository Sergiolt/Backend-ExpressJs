const mongoose = require("mongoose");

const dbConnection = async () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = dbConnection;
