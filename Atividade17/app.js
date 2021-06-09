var express = require("express");
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/static'));

consign({ cwd: 'app' })
  .include('routes')
  .into(app)

app.listen(3000, function () {
    console.log("servidor iniciado");
});
