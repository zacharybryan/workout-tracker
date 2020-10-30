const express = require('express');
const { PromiseProvider } = require('mongoose');

const PORT = 8080

const app = express();

(app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});