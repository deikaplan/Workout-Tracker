const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

module.exports = async (req , res , next) => {

    var id = req.params.id;

    Workout.findById(id, function (err, workout){
      if (err)
        console.log("Error Selecting : %s ", err);
      if (!workout)
        return res.render('404');
      
        workout.client = req.body.client;
        workout.date = req.body.date;
        workout.workout = req.body.workout;
        workout.time = req.body.time;
        workout.exercises = req.body.exercises;
        workout.coachNotes = req.body.coachNotes;
        workout.notes = req.body.notes;
    
        workout.save(function (err) {
            if (err)
                console.log("Error editing : %s ", err);
            res.redirect('/workouts');
      });
    });
    
 };
