const bcrypt = require("bcrypt");

const encrypt = async (password) => {
  const passwordHashed = await bcrypt.hash(password, 10);
  return passwordHashed;
};
const compare = async (plainPassword, passwordHashed) => {
  return bcrypt.compare(plainPassword, passwordHashed);
};

module.exports = {
  encrypt,
  compare,
};
