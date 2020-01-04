const exercisesRouter = require('express').Router();
const Exercise = require('../models/exercise');

// HTTP GET requests
exercisesRouter.get('/', async (request, response) => {
  const exercises = await Exercise.find({})
    .populate({
      path: 'tags', select: 'name',
    });
  response.json(exercises.map((exercise) => exercise.toJSON()));
});

exercisesRouter.get('/:id', async (request, response, next) => {
  try {
    const exercise = await Exercise.findById(request.params.id)
      .populate({
        path: 'tags', select: 'name',
      });
    if (exercise) {
      response.json(exercise.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

// HTTP POST requests
exercisesRouter.post('/', async (request, response, next) => {
  const { body } = request;

  try {
    const exercise = new Exercise({
      name: body.name,
      description: body.description,
      tags: body.tags,
    });

    const savedExercise = await exercise.save();
    response.json(savedExercise.toJSON());
  } catch (exception) {
    next(exception);
  }
});

// HTTP PUT requests
exercisesRouter.put('/:id', async (request, response, next) => {
  const { body } = request;

  try {
    const exercise = {
      name: body.name,
      description: body.description,
      tags: body.tags,
    };

    const updatedExercise = await Exercise.findByIdAndUpdate(
      request.params.id,
      exercise,
      { new: true },
    );
    response.json(updatedExercise.toJSON());
  } catch (exception) {
    next(exception);
  }
});

// HTTP DELETE requests
exercisesRouter.delete('/:id', async (request, response, next) => {
  try {
    await Exercise.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

module.exports = exercisesRouter;
