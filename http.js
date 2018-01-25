var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var dam = fs.readFileSync('./demofile.html','utf8');
    res.write(dam);
    res.end();

}).listen(8080);