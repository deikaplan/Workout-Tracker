module.exports = 
	function addWorkout(req, res, next) {
		res.render('addWorkoutViewClient',
			{title:"Add Workout"});
	}
