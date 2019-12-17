const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

/* Data */
exercises = [
  {
    id: 1,
    exerciseName: "push up",
    region: "arms"
  }, 
  {
    id: 2,
    exerciseName: "pull up",
    region: "arms"
  }, 
  {
    id: 3,
    exerciseName: "sit up",
    region: "abs"
  }
]

/* Routes */
app.get('/', (request, response) => {
  response.send('<h1>Gym Backend</h1>');
})

app.get('/api/exercises', (request, response) => {
  response.json(exercises);
})

app.get('/api/exercises/:id', (request, response) => {
  const id = Number(request.params.id)
  const exercise = exercises.find(exercise => exercise.id === id)

  if (exercise) {
    response.json(exercise)
  } else {
    response.status(404).end()
  }
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})