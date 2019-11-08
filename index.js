var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type','text/plain');
  res.end('Testcase C')
  }).listen(port,function() {
  console.log('Server started at '+port)
  });
