const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { signToken, verifyToken } = require("../utils/handleJwt");

const getUsers = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};
const getUser = async (req, res) => {
  const { id } = req.params;
  const data = await usersModel.findOne({ _id: id });
  res.send(data);
};

const registerUser = async (req, res) => {
  req = matchedData(req);
  const hashedPassword = await encrypt(req.password);
  const body = { ...req, password: hashedPassword };

  const userData = await usersModel.create(body);
  const userSession = {
    userData,
    token: await signToken(userData),
  };
  res.send({ userSession });
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
  getUser,
};
