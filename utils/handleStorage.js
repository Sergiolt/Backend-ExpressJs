const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${extension}`;
    cb(null, filename);
  },
});

const uploadMiddlewware = multer({ storage });

module.exports = uploadMiddlewware;
