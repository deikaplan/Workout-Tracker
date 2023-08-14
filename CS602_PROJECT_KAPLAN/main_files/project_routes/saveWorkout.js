const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

module.exports = async (req , res , next) => {
 

    var workout = new Workout({
      client: req.body.client,
      date: req.body.date,
      workout: req.body.workout,
      time: req.body.time,
      exercises: req.body.exercises,
      coachNotes: req.body.coachNotes,
      notes: req.body.notes,
    })

    workout.save(function (err){
      if(err)
        console.log("Error : %s ", err);
      res.redirect('/workouts');

    });
  };
