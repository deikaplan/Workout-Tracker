const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

// display workouts

module.exports = async (req , res , next) => {

        let workouts = await Workout.find({});

        let results = workouts.map( workout => {
            return {
                id: workout._id,
                client: workout.client,
                date: workout.date,
                workout: workout.workout,
                time: workout.time,
                exercises: workout.exercises,
                coachNotes: workout.coachNotes,
                notes: workout.notes,
            }
        });
            
        res.render('displayClientLogInView',
                {title:"Client Log In", data:results});
        
};
