const express = require("express");
const { registerUser } = require("../controllers/auth");

const {
  validatorRegisterUser,
  validatorLoginUser,
} = require("../validators/auth");
const router = express.Router();

router.post("/login", validatorLoginUser);
router.post("/register", validatorRegisterUser, registerUser);

module.exports = router;
