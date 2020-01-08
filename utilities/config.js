require('dotenv').config();

const {
  PORT = 3001,
  MONGODB_URI,
} = process.env;

module.exports = {
  PORT,
  MONGODB_URI,
};
