const mongoose = require("mongoose");

const UserScheme = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		age: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
			select: false,
			required: true,
		},
		role: {
			type: ["user", "admin"],
			required: true,
			default: "user",
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("users", UserScheme);
