const { tracksModel } = require("../models");

const getTracks = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};
const getTrack = (req, res) => {
  const { id } = req.params;
  res.send(`TRACK ${id}`);
};
const createTrack = async (req, res) => {
  const body = matchedData(req.body);
  const data = await tracksModel.create(body);
  res.send(data);
};
const updateTrack = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = tracksModel.findByIdAndUpdate(id, body);
  res.send(data);
};
const deleteTrack = (req, res) => {
  return;
};

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
