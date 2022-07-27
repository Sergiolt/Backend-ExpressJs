const { check, validationResult } = require("express-validator");

const validatorRegisterUser = [
  check("name").exists().notEmpty().isLength({ min: 2, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isEmail(),
  check("email").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (err) {
      res.status(403);
      res.send({ errors: err.array() });
    }
  },
];

const validatorLoginUser = [
  check("password")
    .exists()
    .notEmpty()
    .withMessage("No password provided")
    .isLength({ min: 3, max: 15 })
    .withMessage("Password must be between 3 and 15 characters"),
  check("email").exists().notEmpty().isEmail().withMessage("Invalid email"),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (err) {
      res.status(403);
      res.send({ errors: err.array() });
    }
  },
];
module.exports = { validatorRegisterUser, validatorLoginUser };
