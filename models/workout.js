// requires 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// new schema built off of seeder file
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    // json readable 
    {
        toJSON: {
            virtuals: true
        }
    }
);

// use workout model 
const Workout = mongoose.model("Workout", workoutSchema);

// export 
module.exports = Workout;