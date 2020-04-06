const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");

app.use(parser.json());
app.use("/", index);

// app.listen(3000, () => console.log("listening on port 3000"));
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
