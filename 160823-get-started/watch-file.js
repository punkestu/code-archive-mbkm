const fs = require("fs");
const watcher = fs.watch("160823-get-started/res");
watcher.on("change", function(event, fname){
      console.log(`${event} on ${fname}`);
});