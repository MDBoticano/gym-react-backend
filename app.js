const config = require('./utilities/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');

const exercisesRouter = require('./controllers/exercises');
const workoutsRouter = require('./controllers/workouts');

const mongoose = require('mongoose');

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });


// app.use(cors());
app.use(bodyParser.json());
app.use('/api/exercises/', exercisesRouter);
app.use('/api/workouts/', workoutsRouter);

module.exports = app;
