// ... other imports
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
const path = require("path")
const port = process.env.PORT || 4000;


// ... other app.use middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/trial', function (req, res) {
  console.log("Express working");
    res.send("Express working")
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port);
console.log("Server running at http://localhost:4000");

/*

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type','text/plain');
  res.end('Testcase C')
  }).listen(port,function() {
  console.log('Server started at '+port)
  });

*/
