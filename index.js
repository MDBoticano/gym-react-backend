const http = require('http');
const app = require('./app');
const config = require('./utilities/config');

const server = http.createServer(app);

const { PORT } = config;

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Gym React server running on port ${PORT}`);
});
