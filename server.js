// base requires
const express = require('express');
const mongoose = require('mongoose');

// port
const PORT = process.env.PORT || 8080;

// express app
const app = express();

// get app running
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to mongoose 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes
app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

// listener
app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});