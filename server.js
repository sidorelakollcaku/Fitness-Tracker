const express = require("express");
const mongoose = require("mongoose");
//const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/apiR.js")(app);
require("./routes/htmlR.js")(app);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`);
});