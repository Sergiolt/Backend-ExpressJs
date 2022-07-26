const express = require("express");
const uploadMiddlewware = require("../utils/handleStorage");
const { createFile } = require("../controllers/storage");
const router = express.Router();

router.post("/", uploadMiddlewware.single("filename"), createFile);
module.exports = router;
