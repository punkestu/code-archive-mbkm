const http = require("http");

http.createServer(function (req, res) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("Hello from simple http server");
      res.end();
}).listen(8080);
