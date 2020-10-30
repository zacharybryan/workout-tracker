const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes //

app.use(require("./routes/view.js"));
// app.use(require("./routes/api.js"));

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});