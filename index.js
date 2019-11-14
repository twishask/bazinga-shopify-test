// ... other imports
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
//var cors = require('cors');
const path = require("path")
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trialdb');

var itemSchema = new mongoose.Schema({
  email: {type: String, required: true},
  id: {type: Number, required: true},
  number: {type: Number},
  created_at: {type: String}
}, {strict:false});

var Item = mongoose.model('Item', itemSchema);

// ... other app.use middleware
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/orders', function (req, res) {
  console.log("Express working");
  Item.find({}, function (err, itemlist) {
    if(err) console.log(err);
    else {
      res.send(itemlist);
    }
  })
  //res.status(200);
    //res.send("Express working on heroku")
})
app.post('/orders/create', function (req, res) {
  console.log(req);
  console.log(res);
  console.log(req.body);
  var newitem = req.body
  Item.create(newitem, function (err, newitem) {
    if (err) console.log(err)
    else {
      res.send(newitem)
    }
  })
//  res.status(200);
  //res.send("req.body here");
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
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
