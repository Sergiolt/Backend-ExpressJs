const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");

const getTracks = async (req, res) => {
	const data = await tracksModel.find({});
	res.send({ data });
};
const getTrack = async (req, res) => {
	const { id } = req.params;
	const track = await tracksModel.findById(id);
	res.send(track);
};
const createTrack = async (req, res) => {
	const body = matchedData(req.body);
	const data = await tracksModel.create(body);
	res.send(data);
};
const updateTrack = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const data = await tracksModel.findByIdAndUpdate(id, body);
	res.send(data);
};
const deleteTrack = (req, res) => {
	const { id } = req.params;
	tracksModel.findByIdAndDelete(id);
	res.send("Track deleted");
};

module.exports = {
	getTracks,
	getTrack,
	createTrack,
	updateTrack,
	deleteTrack,
};
