const exercisesRouter = require('express').Router();
const Exercise = require('../models/exercise');

exercisesRouter.get('/', (request, response) => {
  response.send('<h1>Exercises</h1>');
});

module.exports = exercisesRouter;