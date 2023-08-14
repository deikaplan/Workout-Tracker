
module.exports = 
	function addWorkout(req, res, next) {
		res.render('addWorkoutView',
			{title:"Add Workout"});
	}
