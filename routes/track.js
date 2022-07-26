const express = require("express");
const {
  getTracks,
  getTrack,
  createTrack,
  deleteTrack,
  updateTrack,
} = require("../controllers/track");
const router = express.Router();

router.get("/", getTracks);
router.get("/:id", getTrack);
router.post("/", createTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
