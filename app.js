const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/mongo");

const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();
dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//Routes
app.use("/api", require("./routes/"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
