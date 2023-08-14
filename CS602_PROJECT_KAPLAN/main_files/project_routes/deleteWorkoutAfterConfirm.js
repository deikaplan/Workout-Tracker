const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

module.exports = async (req , res , next) => {
    
    var id = req.params.id;

    Workout.findById(id, function (err, workout){
      if (err)
        console.log("Error Selecting : %s ", err);
      if (!workout)
        return res.render('404');
      
      workout.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ", err);
        res.redirect('/workouts');
      });
    });
  };

  
  