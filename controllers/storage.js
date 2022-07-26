const { storageModel } = require("../models");

const getFiles = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};
const getFile = (req, res) => {
  const { id } = req.params;
  res.send(`TRACK ${id}`);
};
const createFile = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    file: file.filename,
    url: file.path,
  };
  const data = await storageModel.create(body);
  res.send(file);
};
const updateFile = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = storageModel.findByIdAndUpdate(id, body);
  res.send(data);
};
const deleteFile = (req, res) => {
  return;
};

module.exports = {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile,
};
