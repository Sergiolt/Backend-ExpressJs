/**
 * If the response object is passed in, set the status code to 500 and send an error message.
 * @param res - The response object
 * @param [code=500] - The HTTP status code to send back to the client.
 * @param [message=Something happened] - The error message to send back to the client.
 */
const handleResponseError = (
	res,
	code = 500,
	message = "Something happened"
) => {
	res.status(code);
	res.send({ error: message });
};
module.exports = {
	handleResponseError,
};
