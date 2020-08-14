const db = require("../models");

//GET (/api/workouts)
module.exports = app => {
  //GET workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts)
      })
      .catch(err => {
        res.json(err);
      });
  });

  //POST /api/workouts
  app.post("/api/workouts", async (req, res) => {
    try {
      const workout = await db.Workout.create({type: "workout"})
      res.json(workout)
    }
    catch(err) {
      console.log("Error creating workout", err);
    }
  });

  // PUT: /api/workouts/:id

  app.put("/api/workouts/:id", ({body, params}, res) => {
    const id = params.id
    let exercise = [];

    db.Workout.find({_id: id})
      .then(dbWorkout => {
        // console.log("line 35",dbWorkout);
        exercise = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...exercise, body];
        console.log("line 39", allExercises);
        updateWorkout(allExercises);
        
      })
      .catch(err => {
        res.json(err);
      });

      const updateWorkout = (exercise) => {
        db.Workout.findByIdAndUpdate(id, {exercises: exercise}, (err, workout) => {
          if (err) throw err;
          console.log("line 50 ",workout);
        })
      }

  });

  //GET /api/workouts/range
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkouts => {
    res.json(dbWorkouts)
  })
  .catch(err => {
    res.json(err);
  })
})
}
