const workoutsRouter = require('express').Router();
const Workout = require('../models/workout');

// HTTP GET requests
workoutsRouter.get('/', async (request,response) => {
  const workouts = await Workout
    .find({})
    .populate('exercises', 'name tags');
  response.json(workouts.map(workout => workout.toJSON()));
});

// HTTP POST requests
workoutsRouter.post('/', async (request, response) => {
  const body = request.body;

  try {
    const workout = new Workout({
      name: body.name,
      exercises: body.exercises,
    });

    const savedWorkout = await workout.save();
    response.json(savedWorkout.toJSON());
  }
  catch (exception) {
    console.log(exception);
  }
});

module.exports = workoutsRouter;