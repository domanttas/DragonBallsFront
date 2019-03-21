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

// var express = require('express');
// var PORT = process.env.PORT || 8080
//
// var buildPath = 'dist'
//
// // Initialize
// var app = express();
//
// // Serve static resources from 'build' folder
// app.use(express.static(buildPath));
//
// // Otherwise serve index.html
// app.get('*', function (req, res) {
//   res.sendFile(__dirname + buildPath + "/index.html");
// });
//
// app.listen(PORT);

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/DragonBallsFront'));

app.listen(process.env.PORT || 4200);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/DragonBallsFront/index.html'));
});
