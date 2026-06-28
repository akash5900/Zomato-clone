const mongoose = require("mongoose");

const collectionschema = mongoose.Schema({
  title: String,
  image: String,
});

const collectionmodel = mongoose.model("collection", collectionschema);

module.exports = collectionmodel;
