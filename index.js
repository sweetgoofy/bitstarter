var express = require('express')
var app = express();
var fs = require('fs')

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))


var content =fs.readFileSync('index.html')
var out = content.toString()
var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
  response.send(out)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
