const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise in seconds"
      },
      distance: {
        type: Number,
        required: "Enter the distance"
      },
      weight: {
        type: Number,
        required: "Enter the amount of weight used for the exercise"
      },
      reps: {
        type: Number,
        required: "Enter the number of reps done"
      },
      sets: {
        type: Number,
        required: "Enter the number of sets done"
      }
    }
  ]
},
{
  toJSON: {
      virtuals: true
  }
  
});


// total duration virtual property calculation
workoutSchema.virtual("totalDuration").get(function() {
  //console.log("#######################################");
  //console.log(this.exercises);
  let arr = this.exercises;
  var total = 0;
  arr.forEach(el => {
    total += el.duration;
  });
  return total;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { Workout };