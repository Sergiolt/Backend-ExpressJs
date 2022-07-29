const express = require("express");
const {
	registerUser,
	loginUser,
	getUser,
	getUsers,
} = require("../controllers/auth");
 
const {
	validatorRegisterUser,
	validatorLoginUser,
} = require("../validators/auth");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/login", validatorLoginUser, loginUser);
router.post("/register", validatorRegisterUser, registerUser);

module.exports = router;
