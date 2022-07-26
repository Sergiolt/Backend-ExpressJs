const { check, validationResult } = require("express-validator");

const validatorCreateTrack = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("album").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("cover").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("artist").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("artist.name").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("artist.nickname").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("artist.nationality").exists().notEmpty().isLength({ min: 5, max: 90 }),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
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

module.exports = [validatorCreateTrack];
