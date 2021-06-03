var express = require("express");
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.set("views", "./app/views"); 


consign({ cwd: 'app' })
  .include('routes')
  .then('models')
  .into(app)

app.listen(3000, function () {
    console.log("servidor iniciado");
});
