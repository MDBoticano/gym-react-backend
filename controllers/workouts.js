const workoutsRouter = require('express').Router();
const Workout = require('../models/workout');

// HTTP GET requests
workoutsRouter.get('/', async (request, response) => {
  const workouts = await Workout.find({})
    .populate({
      path: 'exercises',
      select: 'name',
      populate: { path: 'tags', select: 'name' },
    });
  response.json(workouts.map((workout) => workout.toJSON()));
});

workoutsRouter.get('/:id', async (request, response, next) => {
  try {
    const workout = await Workout.findById(request.params.id)
      .populate({
        path: 'exercises',
        select: 'name',
        populate: { path: 'tags', select: 'name' },
      });

    if (workout) {
      response.json(workout.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

// HTTP POST requests
workoutsRouter.post('/', async (request, response, next) => {
  const { body } = request;

  try {
    const workout = new Workout({
      name: body.name,
      exercises: body.exercises,
    });

    const savedWorkout = await workout.save();
    response.json(savedWorkout.toJSON());
  } catch (exception) {
    next(exception);
  }
});

// HTTP PUT requests
workoutsRouter.put('/:id', async (request, response, next) => {
  try {
    const { body } = request;

    const workout = new Workout({
      name: body.name,
      exercises: body.exercises,
    });

    const updatedWorkout = await Workout.findByIdAndUpdate(
      request.params.id,
      workout,
      { new: true },
    );
    response.json(updatedWorkout.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = workoutsRouter;
