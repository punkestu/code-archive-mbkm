const fs = require("fs");
fs.readFile("160823-get-started/res/file.txt", {encoding:"utf8"}, function(err, data){
      if(err){return console.error(err);}
      console.log(data);
});

const data = fs.readFileSync("160823-get-started/res/file.txt",{encoding:"utf8"});
console.log(data);