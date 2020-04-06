const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Tv = new Schema({
  title: String,
  description: String,
  rating: Number,
  releaseDate: String,
  image: String,
  media: String,
});

module.exports = mongoose.model("Tv", Tv);
