const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chillflix", { useNewUrlParser: true });

module.exports = mongoose;
