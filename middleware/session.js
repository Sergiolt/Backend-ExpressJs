const {handleResponseError} = require ("../utils/handleErrors");
const {verifyToken} = require ("../utils/handleJwt");

const authMiddleware =async (req, res, next) => {
	try {
		if(!req.headers.authorization){
			handleResponseError(res,403,"Access Denied");
			return;
		}
		const token = req.headers.authorization.split(" ").pop();
		const dataToken = await verifyToken(token);

		if(dataToken._id){
			next();
		}else{
			handleResponseError(res,403,"NO ID");
		
		}
	} catch (error) {
		handleResponseError(res,undefined,undefined);
	}
	
};



module.exports = {
	authMiddleware
};