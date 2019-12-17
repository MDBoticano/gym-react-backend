const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    }
  ],
});

workoutSchema.plugin(uniqueValidator);

// Convert _id to id & remove __v
workoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Workout', workoutSchema);