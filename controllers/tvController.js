const Tv = require("../models/Tv");

module.exports = {
  index: (req, res) => {
    Tv.find({}).then((tvShow) => {
      res.json(tvShow);
    });
  },
  showRating: (req, res) => {
    Tv.find({ rating: req.params.rating }).then((tvShow) => {
      res.json(tvShow);
    });
  },
  showName: (req, res) => {
    Tv.find({ title: req.params.name }).then((tvShow) => {
      res.json(tvShow);
    });
  },
  showReleaseDate: (req, res) => {
    Tv.find({ releaseDate: req.params.releaseDate }).then((tvShow) => {
      res.json(tvShow);
    });
  },
  submit: (req, res) => {
    Tv.create(req.body).then((tvShow) => {
      res.json(tvShow);
    });
  },
  updateList: (req, res) => {
    Tv.findOneAndUpdate({ title: req.params.name }, req.body).then((tvShow) => {
      res.json(tvShow);
    });
  },
  deleteItem: (req, res) => {
    Tv.findOneAndDelete({ title: req.params.name }).then((tvShow) => {
      res.json(tvShow);
    });
  },
};
