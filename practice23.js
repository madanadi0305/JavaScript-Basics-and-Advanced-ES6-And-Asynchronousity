var fs = require("fs");
function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function display(file) {
  var c = await read(file);
  return c;
}
display("./practice23.js").then(res => {
  console.log(res);
});
