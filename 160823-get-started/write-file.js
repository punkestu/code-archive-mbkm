const fs = require("fs");

fs.writeFile(
  "160823-get-started/res/file_out.txt",
  "hello from writeFile",
  function (err) {
    if (err) return console.error(err);
  }
);

try {
  fs.writeFileSync(
    "160823-get-started/res/file_out.txt",
    "hello from writeFileSync"
  );
} catch (err) {
  console.error(err);
}

fs.writeFile(
  "160823-get-started/res/file_out.bin",
  Buffer.from([16, 17, 18]),
  function (err) {
    if (err) return console.error(err);
  }
);
