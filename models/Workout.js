const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    name: {
      type: String,
      trim: true,
      required: "Name is required"
    },

    duration: {
      type: Number,
      trim: true,
      required: "Enter a duration"

    },

    type: {
      type: String,
      trim: true,
      required: "Enter exercise type"
    },

    weight: {
      type: Number
    },

    sets: {
      type: Number
    },

    reps: {
      type: Number
    },

    distance: {
      type: Number
    }
  }]
}, {
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema)
module.exports = Workout;