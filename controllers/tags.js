const tagsRouter = require('express').Router();
const Tag = require('../models/tag');

// HTTP GET requests
tagsRouter.get('/', async (request, response) => {
  const tags = await Tag.find({});
  response.json(tags.map(tag => tag.toJSON()));
});

tagsRouter.get('/:id', async (request, response) => {
  try {
    const exercise = await Tag.findById(request.params.id);
    if (tag) {
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
tagsRouter.post('/', async (request, response) => {

  const body = request.body;

  try {
    const tag = new Tag({
      name: body.name,
    });
  
    const savedTag = await tag.save();
    response.json(savedTag.toJSON());
  }
  catch (exception) {
    console.log(exception);
  }
});

module.exports = tagsRouter;