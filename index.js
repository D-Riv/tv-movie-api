const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(parser.json());
app.use("/", index);

app.get("/", function (req, res) {
  res.json({
    Directory: "Choose an option below",

    Movies: "https://tv-movie-api.herokuapp.com/movie",
    Shows: "https://tv-movie-api.herokuapp.com/tv",

    // Movies: "http://localhost:4000/movie",
    // Shows: "http://localhost:4000/tv",
  });
});

// app.listen(3000, () => console.log("listening on port 3000"));
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
