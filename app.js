const express = require('express');
const app = express();

const exercisesRouter = require('./controllers/exercises');

app.use('/api/exercises/', exercisesRouter);

module.exports = app;
