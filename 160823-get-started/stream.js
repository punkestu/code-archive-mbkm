var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("160823-get-started/res/file.txt");
readerStream.setEncoding("utf8");

readerStream.on("data", function (chunk) {
  data += chunk;
});

readerStream.on("end", function () {
  console.log("file readed");
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});

var writerStream = fs.createWriteStream("160823-get-started/res/file_out.txt");

writerStream.write("hello from app", "utf8");
writerStream.end();

writerStream.on("finish", function () {
  console.log("writed to file_out.txt");
});
writerStream.on("error", function (err) {
  console.log(err.stack);
});

var pipeWriter = fs.createWriteStream("160823-get-started/res/pipe_out.txt");
readerStream.pipe(pipeWriter);

var zlib = require("zlib");
var chainWriter = fs.createWriteStream("160823-get-started/res/chain_out.txt.gz");
readerStream.pipe(zlib.createGzip()).pipe(chainWriter);
chainWriter.on("finish", function(){
      var chainReader = fs.createReadStream("160823-get-started/res/chain_out.txt.gz");
      var gunzip = zlib.createGunzip();
      chainReader.pipe(gunzip).pipe(fs.createWriteStream("160823-get-started/res/chain_out.txt"));
      gunzip.on("error", function(err){
            console.log(err);
      })
});