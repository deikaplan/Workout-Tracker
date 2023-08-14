const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;


// schema

let workoutSchema = new Schema({
	client: String,
	date: String, 
	workout: String,
	time: String,
	exercises: String,
	coachNotes: String,
	notes: String,
	
}, {
	collection: 'workouts_kaplan'
});

module.exports = {	
	getModel: () => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
			model = connection.model("WorkoutModel", 
							workoutSchema);
		};
		return model;
	}
};
























