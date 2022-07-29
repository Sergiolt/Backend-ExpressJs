const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { signToken } = require("../utils/handleJwt");
const { handleResponseError } = require("../utils/handleErrors");

const getUsers = async (req, res) => {
	const data = await usersModel.find({});
	res.send({ data });
};
const getUser = async (req, res) => {
	const { id } = req.params;
	const data = await usersModel.findOne({ _id: id });
	res.send(data);
};


const loginUser = async (req, res) => {
	try {
		const { password, email } = matchedData(req);
		const user = await usersModel.findOne({ email: email }).select("password name role");
		if (!user) {
			handleResponseError(res, 403, "Password or email is incorrect");
			return;
		}
		const isPasswordValid = await compare(password, user.password);
		if (!isPasswordValid) {
			handleResponseError(res, 403, "Password or email is incorrect");
			return;
		}

		user.set("password", undefined);

		const tokenJwt = await signToken(user);

		const data = {
			token: tokenJwt,
			user: user,
		};

		res.send({ data });
	} catch (error) {
		handleResponseError(res, undefined, error.message);
	}
};

const registerUser = async (req, res) => {
	req = matchedData(req);
	const hashedPassword = await encrypt(req.password);
	const body = { ...req, password: hashedPassword };

	const userData = await usersModel.create(body);
	res.send({ userData });
};
const updateUser = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const data = await usersModel.findByIdAndUpdate(id, body);
	res.send(data);
};


module.exports = {
	getUsers,
	registerUser,
	updateUser,
	getUser,
	loginUser,
};
