const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const tagsRouter = require('./controllers/tags');
const exercisesRouter = require('./controllers/exercises');
const workoutsRouter = require('./controllers/workouts');

const config = require('./utilities/config');
const logger = require('./utilities/logger');
const middleware = require('./utilities/middleware');

const app = express();

mongoose.set('useFindAndModify', false);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message);
  });

app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use('/api/exercises/', exercisesRouter);
app.use('/api/workouts/', workoutsRouter);
app.use('/api/tags/', tagsRouter);

module.exports = app;
