const mongoose = require("mongoose");
const Exercise = require("./exerciseModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {useNewUrlParser: true});

const data = {

};

Exercise.create(data)
  .then(fitnessDB => {
    console.log(fitnessDB);
  })
  .catch( ({ message }) => {
    console.log(message);
  });