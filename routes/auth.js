const express = require("express");
const { matchedData } = require("express-validator");
const { registerUser } = require("../controllers/auth");

const {
  validatorRegisterUser,
  validatorLoginUser,
} = require("../validators/auth");
const router = express.Router();

router.post("/login", validatorLoginUser, registerUser);
router.post("/register", validatorRegisterUser);

module.exports = router;
