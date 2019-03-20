const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/DragonBallsFront'));

app.get('/*', function (req, res) {
  res.sendFile('./dist/DragonBallsFront/index.html');
});

app.listen(process.env.PORT || 8080);
