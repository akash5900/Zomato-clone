const collectionmodel = require("../models/collectionModel");
const uploadfile = require("../services/storage.service");

async function createCollection(req, res) {
  const { title } = req.body;
  const image = req.file;

  if (!image) {
    return res.status(400).json({
      message: "image not found",
    });
  }

  const result = await uploadfile(req.file.buffer);

  const alreadyexists = await collectionmodel.findOne({ title });

  if (alreadyexists) {
    return res.status(400).json({
      message: "collection already exists",
    });
  }

  const collection = await collectionmodel.create({
    title,
    image: result.url,
  });

  res.status(201).json({
    message: "collection created succesfully",
    collection,
  });
}

async function getCollections(req, res) {
  try {
    const collections = await collectionmodel.find();

    res.status(200).json({
      message: " collections fetched successfully",
      collections,
    });
  } catch (error) {
    return res.status(400).json({
      message: "get error",
    });
  }
}

module.exports = { createCollection, getCollections };
