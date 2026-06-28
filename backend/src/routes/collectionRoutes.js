const express = require("express");
const collectioncontroller = require("../controller/collectionController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post(
  "/place",
  upload.single("image"),
  collectioncontroller.createCollection,
);

router.get("/place", collectioncontroller.getCollections);

module.exports = router;
