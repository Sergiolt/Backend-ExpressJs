const express = require("express");
const { registerUser, getUser, getUsers } = require("../controllers/auth");

const {
  validatorRegisterUser,
  validatorLoginUser,
} = require("../validators/auth");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/login", validatorLoginUser);
router.post("/register", validatorRegisterUser, registerUser);

module.exports = router;
