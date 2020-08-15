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
    db.Workout.find({})
    .then(dbWorkouts =>{
      res.json(dbWorkouts);
    }) 
    .catch(err => {
      res.json(err);
    });
  });
  // POST /api/workouts
  app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  // PUT /api/workouts/:id

  app.put("/api/workouts/:id", ({body, params}) => {
    
  });



};