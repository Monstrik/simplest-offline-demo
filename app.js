var express = require('express');
var app = express();

app.use(express.static('www'));

app.listen(3000, function() {
    console.log('Demo is running on localhost:3000');
});