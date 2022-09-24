const db = require("../models");

// review index route
const index = (req, res) => {
  db.Review.find({}, (error, reviews) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json({
      reviews,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

// review create route
const create = (req, res) => {
  db.Review.create(req.body, (error, createReview) => {
    if (error) return res.status(404).json({ error: error.message });
    return res.status(200).json(createReview);
  });
};

// destroy route
const destroy = (req, res) => {
  db.Review.findByIdAndDelete(req.params.id, (error, deletedReview) => {
    if(!deletedReview) return res.status(400).json({error:
      'Review not found'})
    if(error) return res.status(400).json({error: error.message})
    return res.status(200).json({message: `Review ${deletedReview.name} deleted successfully`})
  })
}


module.exports = {
  index,
  create,
  destroy,
};
