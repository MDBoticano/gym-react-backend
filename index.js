const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('<h1>Gym React Backend</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Gym-React server running on port ${PORT}`);
});

