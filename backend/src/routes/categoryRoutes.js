const express = require("express");
const multer = require("multer");
const categorycontroller = require("../controller/categoryController");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post(
  "/categorytab",
  upload.single("image"),
  categorycontroller.createCategoryTabs,
);

router.get("/categorytab", categorycontroller.getCategoryTabs);

router.put(
  "/categorytab/:id",
  upload.single("image"),
  categorycontroller.updateCategoryTabs,
);

router.delete("/categorytab/:id", categorycontroller.deleteCategoryTabs);

module.exports = router;
