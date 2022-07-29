const express = require("express");
const {
	getTracks,
	getTrack,
	createTrack,
	deleteTrack,
	updateTrack,
} = require("../controllers/track");
const {authMiddleware} = require("../middleware/session");
const { validatorCreateTrack } = require("../validators/track.js");
const router = express.Router();

router.get("/", authMiddleware,getTracks);
router.get("/:id", getTrack);
router.post("/", validatorCreateTrack, createTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
