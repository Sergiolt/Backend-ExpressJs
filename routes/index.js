const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (file) => {
  return file.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).map((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    console.log(`Routing ${name}`);
    router.use(`/${name}`, require(`./${name}`));
  }
});

module.exports = router;
