const WorkoutDB = require('./workoutDB.js');

const Workout = WorkoutDB.getModel();

(async() => {

	await Workout.deleteMany({});

	let workout1 = new Workout({
		client:'John Smith',date:'7/10/2023',workout:'Push Day',time:'50 min',exercises:'Bench Press (4x10), Shoulder Press (4x12)',coachNotes:'Needs positive reinforcement to complete cardio',notes:'Skipped cardio today'
	}); 

	let workout2 = new Workout({
		client:'John Smith',date:'7/12/2023',workout:'Pull Day',time:'55 min',exercises:'Pull Ups (4x10), Barbell Row (4x10)',coachNotes:'Pull up form is not up to par',notes:'None'
	}); 

	let workout3 = new Workout({
		client:'John Smith',date:'7/14/2023',workout:'Leg Day',time:'45 min',exercises:'Barbell Squat (4x10), Deadlift (4x5)',coachNotes:'Deadlift form check next session',notes:'Squat form work needed'
	}); 

	let workout4 = new Workout({
		client:'Jane Doodle',date:'7/15/2023',workout:'Crossfit',time:'45 min',exercises:'Circuit Training',coachNotes:'Very good performance today',notes:'Great performance, raise difficulty'
	}); 

	let workout5 = new Workout({
		client:'Danny Dandyville',date:'7/15/2023',workout:'Kettlebell Upper',time:'45 min',exercises:'Clean and Jerk (100 reps), Shoulder Press (100 reps)',coachNotes:'Great form',notes:'Raise weight next time'
	}); 

	let workout6 = new Workout({
		client:'Janet Smitherton',date:'7/15/2023',workout:'Full Body',time:'60 min',exercises:'Squat (3x10), Bench Press (3x10)',coachNotes:'Great bench',notes:'Bench form work needed'
	}); 

	let workout7 = new Workout({
		client:'Jane Doodle',date:'7/16/2023',workout:'Crossfit',time:'45 min',exercises:'Circuit Training',coachNotes:'very fast completion, upper body is not strong',notes:'Add upper body strength focus'
	}); 

	let workout8 = new Workout({
		client:'Danny Dandyville',date:'7/17/2023',workout:'Kettlebell Lower',time:'45 min',exercises:'KB Squat (100 reps), KB Deadlift (100 reps)',coachNotes:'Amazing effort',notes:'Raise weight next time'
	}); 

	let workout9 = new Workout({
		client:'Jane Doodle',date:'7/17/2023',workout:'Jogging',time:'60 min',exercises:'Outdoor Jogging',coachNotes:'Great pace, work on increasing',notes:'7 minute mile pace'
	}); 

	let workout10 = new Workout({
		client:'Janet Smitherton',date:'7/18/2023',workout:'Full Body',time:'60 min',exercises:'Deadlift (3x10), Row (3x10)',coachNotes:'None',notes:'None'
	}); 

	await Promise.all([
			workout1.save(), 
			workout2.save(), 
			workout3.save(),
			workout4.save(), 
			workout5.save(), 
			workout6.save(),
			workout7.save(), 
			workout8.save(), 
			workout9.save(),
			workout10.save()
		]);

	let currentWorkouts = await Workout.find({});

	console.log(currentWorkouts);

	process.exit();


})();












