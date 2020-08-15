const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    type: {
      type: String,
      required: "Enter type of exercise",
      trim: true
    },
    name: {
      type: String,
      required: "Enter name of exercise",
      trim: true
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    distance: {
      type: Number
    },
    sets: {
      type: Number
    }
  }]
}, 
{
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total,exercise) => {
    return total += exercise.duration
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;