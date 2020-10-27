# To-Do : Write a javascript program that contains a function that reads content from a file.

Hints:

- Open practice23.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
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
```