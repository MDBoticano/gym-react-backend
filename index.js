const http = require('http');
const app = require('./app');
const config = require('./utilities/config');

const server = http.createServer(app);

const PORT = config.PORT;

server.listen(PORT, () => {
  console.log(`Gym React server running on port ${PORT}`);
});