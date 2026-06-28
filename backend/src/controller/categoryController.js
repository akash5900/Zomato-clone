const categorymodel = require("../models/categoryModel");
const uploadfile = require("../services/storage.service");

async function createCategoryTabs(req, res) {
  const { name } = req.body;
  const image = req.file;

  if (!image) {
    return res.status(400).json({
      message: "Image is required",
    });
  }

  const result = await uploadfile(req.file.buffer);

  const alreadyexists = await categorymodel.findOne({ name });

  if (alreadyexists) {
    return res.status(400).json({
      message: " Category already exists",
    });
  }

  const categoryTab = await categorymodel.create({
    name,
    image: result.url,
  });

  res.status(201).json({
    message: "Categorytab created successfully",
    categoryTab,
  });
}

async function getCategoryTabs(req, res) {
  const category = await categorymodel.find();

  res.status(200).json({
    message: "category fetched successfully",
    category,
  });
}

async function deleteCategoryTabs(req, res) {
  const { id } = req.params;

  await categorymodel.findByIdAndDelete(id);

  res.status(200).json({
    message: "category deleted successfully",
  });
}

async function updateCategoryTabs(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  let updateData = { name };

  if (req.file) {
    const result = await uploadfile(req.file.buffer);
    updateData.image = result.url;
  }

  const updatedcategorytabs = await categorymodel.findByIdAndUpdate(
    id,
    updateData,
    { new: true },
  );

  res.status(200).json({
    message: "category updated successfully",
    updatedcategorytabs,
  });
}
module.exports = {
  createCategoryTabs,
  getCategoryTabs,
  deleteCategoryTabs,
  updateCategoryTabs,
};
