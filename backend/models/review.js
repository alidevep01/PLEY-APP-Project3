const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true, default: 0 },
  review: { type: String },
  reviewId: { type: String }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
