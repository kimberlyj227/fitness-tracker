const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express")

const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {
  useNewUrlParser: true
});

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
// require("./seeders/seed.js");




// start server
app.listen(PORT, () => {
  console.log((`App running on port ${PORT}`));

})