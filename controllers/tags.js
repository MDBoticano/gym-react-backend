const tagsRouter = require('express').Router();
const Tag = require('../models/tag');

// HTTP GET requests
tagsRouter.get('/', async (request, response) => {
  const tags = await Tag.find({});
  response.json(tags.map((tag) => tag.toJSON()));
});

tagsRouter.get('/:id', async (request, response, next) => {
  try {
    const tag = await Tag.findById(request.params.id);
    if (tag) {
      response.json(tag.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

// HTTP POST requests
tagsRouter.post('/', async (request, response, next) => {

  const { body } = request;

  try {
    const tag = new Tag({
      name: body.name,
    });

    const savedTag = await tag.save();
    response.json(savedTag.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = tagsRouter;
