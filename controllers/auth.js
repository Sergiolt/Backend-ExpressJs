const { usersModel } = require("../models");

const getUsers = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};
const getFile = (req, res) => {
  const { id } = req.params;
  res.send(`TRACK ${id}`);
};

const registerUser = async (req, res) => {
  const body = matchedData(req.body);
  const data = await usersModel.create(body);
  res.send({ data });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await usersModel.findByIdAndUpdate(id, body);
  res.send(data);
};
const deleteUser = (req, res) => {
  return;
};

module.exports = {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
};
