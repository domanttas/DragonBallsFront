// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// app.use(express.static('dist'));
//
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
//
// app.listen(process.env.PORT || 8080);
var express = require('express');
var PORT = process.env.PORT || 8080

var buildPath = 'dist'

// Initialize
var app = express();

// Serve static resources from 'build' folder
app.use(express.static(buildPath));

// Otherwise serve index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + buildPath + "/index.html");
});

app.listen(PORT);
