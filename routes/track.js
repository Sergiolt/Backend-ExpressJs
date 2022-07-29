const express = require("express");
const {
	getTracks,
	getTrack,
	createTrack,
	deleteTrack,
	updateTrack,
} = require("../controllers/track");

const { validatorCreateTrack } = require("../validators/track.js");
const router = express.Router();

router.get("/", getTracks);
router.get("/:id", getTrack);
router.post("/", validatorCreateTrack, createTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
