const db = require("../models");

module.exports = app => {

  // GET /api/workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkouts =>{
      res.json(dbWorkouts);
    }) 
    .catch(err => {
      res.json(err);
    });
  });

  // GET /api/workouts/range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbWorkouts =>{
      res.json(dbWorkouts);
    }) 
    .catch(err => {
      res.json(err);
    });
  });
  // POST /api/workouts
  app.post("/api/workouts", async (req, res) => {
    try {
      const workout = await db.Workout.create({type: "workout"});
      res.json(workout)
    }
    catch(err) {
      console.log(err);
      
    };
  });

  // PUT /api/workouts/:id

  app.put("/api/workouts/:id", ({body, params}, res) => {
    const id = params.id;
    let savedEx = [];

    db.Workout.find({_id: id})
    .then(dbWorkout => {
      savedEx = dbWorkout[0].exercises;
      res.json(savedEx);
      let allExercises = [...savedEx, body];
      updateWorkout(allExercises)
    });
    const updateWorkout = (exercise) => {
      db.Workout.findByIdAndUpdate(id, {exercises: exercise}, (err, workout) => {
        if (err) throw err;
        });
    };
  });



};