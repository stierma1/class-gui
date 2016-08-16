var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(__dirname))

app.listen(5055)
