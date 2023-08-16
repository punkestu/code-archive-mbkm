const express = require("express");
var app = express();

app.get("/", function(req, res){
      res.send("Hello from express http");
});

const server = app.listen(8080, function(){
      const host = server.address().address;
      const port = server.address().port;

      console.log(`listening at port: ${host}${port}`)
});