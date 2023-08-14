const workoutDB = require('../workoutDB.js');
const Workout = workoutDB.getModel();

// display workouts

module.exports = async (req , res , next) => {

        const clientName = req.body.name;
        const date = req.body.date;

        // check if both conditions are provided

        if (!clientName && date) {
            return res.render('404', { message: "At least a client name needs to be provided." });
    }

        
        const conditions = [];
        if (clientName) conditions.push({ client: clientName });
        if (date) conditions.push({ date: date });
    
        let workouts;
        if (conditions.length > 0) {
            workouts = await Workout.find({ $and: conditions });
        } else {
            workouts = await Workout.find({});
        }


        let results = workouts.map( workout => {
            return {
                id: workout._id,
                client: workout.client,
                date: workout.date,
                workout: workout.workout,
                time: workout.time,
                exercises: workout.exercises,
                notes: workout.notes,
            }
        });
            
        res.render('displayClientAfterLogInView',
                {title:"Your Workout History", data:results});
        
};
