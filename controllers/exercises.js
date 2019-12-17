const exercisesRouter = require('express').Router();
const Exercise = require('../models/exercise');

// HTTP GET requests
exercisesRouter.get('/', async (request, response) => {
  const exercises = await Exercise.find({});
  response.json(exercises.map(exercise => exercise.toJSON()));
});

exercisesRouter.get('/:id', async (request, response) => {
  try {
    const exercise = await Exercise.findById(request.params.id);
    if (exercise) {
      response.json(exercise.toJSON());
    } else {
      response.status(404).end()
    }
  }
  catch (exception) {
    console.log(exception);
  }
});

// HTTP POST requests
exercisesRouter.post('/', async (request, response) => {

  const body = request.body;

  try {
    const exercise = new Exercise({
      name: body.name,
    });
  
    const savedExercise = await exercise.save();
    response.json(savedExercise.toJSON());
  }
  catch (exception) {
    console.log(exception);
  }
});

module.exports = exercisesRouter;