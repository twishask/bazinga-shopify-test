var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
const path = require("path")
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trialdb');

var orderSchema = new mongoose.Schema({
  email: {type: String, required: false},
  id: {type: Number, required: true},
  number: {type: Number},
  created_at: {type: String}
}, {strict:false});

var Order = mongoose.model('Order', orderSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/orders', function (req, res) {
  Order.find({}, function (err, orders) {
    if(err) console.log(err);
    else {
      res.send(orders);
    }
  })
})

app.post('/orders/create', function (req, res) {
  var neworder = req.body
  Order.create(neworder, function (err, neworder) {
    if (err) console.log(err)
    else {
      res.send(neworder)
    }
  })
})

app.put('/orders/update/:order', function (req, res) {
  var olditem = {_id: req.params.order}
  var newitem = req.body
  Order.update(olditem, newitem, function (err, newitem) {
    if (err) console.log(err)
    else {
      res.send(newitem)
    }
  })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
console.log("Server running at http://localhost:4000");
