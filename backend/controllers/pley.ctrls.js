const db = require("../models");

const index = (req, res) => {
  db.Review.find({}, (error, reviews) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json({
      reviews,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

const create = (req, res) => {
  db.Review.create(req.body, (error, createReview) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json(createReview);
  });
};

module.exports = {
  index,
  create,
};
