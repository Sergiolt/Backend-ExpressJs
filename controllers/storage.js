const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getFiles = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};
const getFile = (req, res) => {
  const { id } = req.params;
  const data = storageModel.findById(id);
};

const createFile = async (req, res) => {
  const { file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
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
