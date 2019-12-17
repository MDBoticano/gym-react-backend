# Gym React (Backend)
A basic CRUD app except geared towards gymming. This repo is meant for just the back-end. For the front-end, see [gym-react](https://github.com/MDBoticano/gym-react).

## Schema (WIP)

### `user`
Represents an individual gym-goer
- `name` : name of the user

### `exercise`
Represents an activity that can be performed at the gym
- `equipment` : a list of equipment required to perform the workout
- `regions` : the parts of the the body that are worked out, and in an a exercise, how much a region is worked out relative to others
- `name` : a name for the exercise
- `description` : a short description of what the exercise is
- `instructions` : a set of instructions on how to perform the workout
-

### `workout`
Represents a set of `exercise`s that are optionally ordered
- `exercises` : the list of exercises
- `regions` : alternative to exercises, one can just list what regions they want to work out