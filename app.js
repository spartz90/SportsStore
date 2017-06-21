var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
var port = 5000;

app.use(serveStatic("./client"));
app.listen(port, function(){
  console.log(port + " / user connect!");
});
