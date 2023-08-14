const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

module.exports = async (req , res , next) => {
    
    var id = req.params.id;

    Workout.findById(id, function (err, workout){
      if (err)
        console.log("Error Selecting : %s ", err);
      if (!workout)
        return res.render('404');
      
		  res.render('deleteWorkoutView',
			  {title:"Delete Workout",
         data: {id: workout._id,
          client: workout.client,
          date: workout.date,
          workout: workout.workout,
          time: workout.time,
          exercises: workout.exercises,
          coachNotes: workout.coachNotes,
          notes: workout.notes,}
        });

  })
};