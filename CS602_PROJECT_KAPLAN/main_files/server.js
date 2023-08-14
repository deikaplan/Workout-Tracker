var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

const xmljs = require('xml-js'); //test
const mongoose = require('mongoose'); //test

var app = express();

// setup handlebars view engine
app.engine('handlebars', 
    handlebars({defaultLayout: 'main_logo'}));
app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing

var router = express.Router();
app.use('/', router);


// other modules
var displayWorkouts = require("./project_routes/displayWorkouts");
var displayClientWorkouts = require("./project_routes/displayClientWorkouts");
var displayWorkoutsClientVersion = require("./project_routes/displayWorkoutsClientVersion");
var displayWorkoutsClientVersionLoggedIn = require("./project_routes/displayWorkoutsClientVersionLoggedIn");
var addWorkout= require("./project_routes/addWorkout");
var addWorkoutClient= require("./project_routes/addWorkoutClient");
var saveWorkout = require("./project_routes/saveWorkout");
var saveWorkoutClient = require("./project_routes/saveWorkoutClient");
var deleteWorkout = require("./project_routes/deleteWorkout");
var deleteWorkoutAfterConfirm = require("./project_routes/deleteWorkoutAfterConfirm");
var editWorkout = require("./project_routes/editWorkout");
var saveAfterEdit = require("./project_routes/saveAfterEdit");


// router specs
router.get('/', function(req, res, next) {
  res.redirect('/workouts');
});

router.get('/workouts', displayWorkouts);
router.post('/workouts', displayClientWorkouts);

router.get('/client', displayWorkoutsClientVersion);
router.post('/client', displayWorkoutsClientVersionLoggedIn);



router.get('/workouts/add', addWorkout);
router.post('/workouts/add', saveWorkout);

router.get('/client/add', addWorkoutClient);
router.post('/client/add', saveWorkoutClient);

router.get('/workouts/edit/:id', editWorkout);
router.post('/workouts/edit/:id', saveAfterEdit);

router.get('/workouts/delete/:id', deleteWorkout);
router.post('/workouts/delete/:id', deleteWorkoutAfterConfirm);





// JSON and XML formats for the displayWorkouts API
router.get('/api/workouts', async (req, res) => {
  try {
    const Workout = require('./workoutDB').getModel();
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});



router.get('/api/workouts/xml', async (req, res) => {
  try {
    const Workout = require('./workoutDB').getModel();
    const workouts = await Workout.find({});

    let xmlData = `<?xml version="1.0" encoding="UTF-8"?>\n<workouts>\n`;

    workouts.forEach((workout, index) => {
      xmlData += `  <workout>\n`;
      xmlData += `    <client>${workout.client}</client>\n`;
      xmlData += `    <date>${workout.date}</date>\n`;
      xmlData += `    <workoutName>${workout.workout}</workoutName>\n`;
      xmlData += `    <time>${workout.time}</time>\n`;
      xmlData += `    <exercises>${workout.exercises}</exercises>\n`;
      xmlData += `    <notes>${workout.notes}</notes>\n`;
      xmlData += `  </workout>\n`;

      console.log(`XML data generated for workout ${index + 1}:`, xmlData);
    });

    xmlData += `</workouts>`;

    console.log('Final XML data:', xmlData);

    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});





// JSON and XML formats for the Client Workouts API
router.get('/api/workouts/client/:clientName', async (req, res) => {
  try {
    const Workout = require('./workoutDB').getModel();
    const clientName = req.params.clientName;

    const workouts = await Workout.find({ client: clientName });
    res.json(workouts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});



router.get('/api/workouts/client/:clientName/xml', async (req, res) => {
  try {
    const clientName = req.params.clientName;
    const Workout = require('./workoutDB').getModel();
    const workouts = await Workout.find({ client: clientName });

    let xmlData = `<?xml version="1.0" encoding="UTF-8"?>\n<workouts>\n`;

    workouts.forEach((workout, index) => {
      xmlData += `  <workout>\n`;
      xmlData += `    <client>${workout.client}</client>\n`;
      xmlData += `    <date>${workout.date}</date>\n`;
      xmlData += `    <workoutName>${workout.workout}</workoutName>\n`;
      xmlData += `    <time>${workout.time}</time>\n`;
      xmlData += `    <exercises>${workout.exercises}</exercises>\n`;
      xmlData += `    <notes>${workout.notes}</notes>\n`;
      xmlData += `  </workout>\n`;

      console.log(`XML data generated for workout ${index + 1}:`, xmlData);
    });

    xmlData += `</workouts>`;

    console.log('Final XML data:', xmlData);

    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});






// JSON format for searching client workouts by both name and date
router.get('/api/workouts/client/:clientName/:date', async (req, res) => {
  try {
    const clientName = req.params.clientName;
    const date = req.params.date;
    const Workout = require('./workoutDB').getModel();
    const workouts = await Workout.find({ client: clientName, date: date });
    res.json(workouts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});



router.get('/api/workouts/client/:clientName/:date/xml', async (req, res) => {
  try {
    const clientName = req.params.clientName;
    const date = req.params.date;
    console.log(date);
    const Workout = require('./workoutDB').getModel();
    const workouts = await Workout.find({ client: clientName, date: date });

    let xmlData = `<?xml version="1.0" encoding="UTF-8"?>\n<workouts>\n`;

    workouts.forEach((workout, index) => {
      xmlData += `  <workout>\n`;
      xmlData += `    <client>${workout.client}</client>\n`;
      xmlData += `    <date>${workout.date}</date>\n`;
      xmlData += `    <workoutName>${workout.workout}</workoutName>\n`;
      xmlData += `    <time>${workout.time}</time>\n`;
      xmlData += `    <exercises>${workout.exercises}</exercises>\n`;
      xmlData += `    <notes>${workout.notes}</notes>\n`;
      xmlData += `  </workout>\n`;

      console.log(`XML data generated for workout ${index + 1}:`, xmlData);
    });

    xmlData += `</workouts>`;

    console.log('Final XML data:', xmlData);

    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});











app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

