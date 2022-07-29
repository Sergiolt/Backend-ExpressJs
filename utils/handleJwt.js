const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * It takes a user object as an argument, and returns a signed JWT token
 * @param user - The user object that we want to sign the token for.
 * @returns A signature
 */
const signToken = async (user) => {
	const signature = await jwt.sign(
		{ _id: user._id, role: user.role },
		JWT_SECRET,
		{
			expiresIn: "2h",
		}
	);
	return signature;
};
const verifyToken = async (token) => {
	try {
		return	jwt.verify(token, JWT_SECRET);
	} catch (error) {
		return null;
	}
};

module.exports = {
	signToken,
	verifyToken,
};
