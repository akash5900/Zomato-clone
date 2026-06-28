const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema({
  name: String,
  image: String,
});

const categorymodel = mongoose.model("categorytab", categoryschema);

module.exports = categorymodel;
