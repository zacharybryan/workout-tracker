// requires 
const router = require("express").Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout");

// creates workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// find by id
router.put("/api/workouts/:id", (req, res) => {
    // use workout to find update object
    Workout.update({_id:mongoose.Types.ObjectId(req.params.id)},{
        // imports info to exercise
        $push:{exercises:req.body}
    })
    // to json
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    // errors
    .catch(err => {
        res.json(err);
    });
})

// finds previous workouts 
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
// add api/range find all work outs and return them ---> like get workouts 

module.exports = router;