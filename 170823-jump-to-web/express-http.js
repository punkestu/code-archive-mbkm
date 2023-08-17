const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// custom middleware
app.use("/", function (req, res, next) {
  console.log("someone access /");
  next();
});

app.get("/", function (req, res) {
      res.sendFile(__dirname + "/res/index.html");
});

app.post("/user", function(req,res){
      var reqBody = {
            fullName: req.body["full_name"],
            gender: req.body["gender"]
      };
      res.end(JSON.stringify(reqBody));
});

app.listen(8888);