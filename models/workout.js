const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// - include the following properties to the Workout Model:
//     - day (type -> Date)
//     - exercises (type -> Array)
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            //     - Inside the "exercises" property Array, you will store each of the exercises for that workout as objects.
            // - Each object inside the "exercises" property will have the following properties:
            //     - type (type -> String)
            //     - name (type -> String)
            //     - duration (type -> Number)
            //     - weight (type -> Number)
            //     - reps (type -> Number)
            //     - sets (type -> Number)
            //     - distance (type -> Number)
            type: {
                type: String,
                required: true,
                trim: true
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            duration: {
                type: Number,
                required: true,
                trim: true
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;