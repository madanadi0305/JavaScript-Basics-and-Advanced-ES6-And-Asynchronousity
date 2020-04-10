# To-Do : Write a JS program which reads the file "Helper.txt" and prints its content.


Hint:

- Open practice01.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
var fs = require("fs");

fs.readFile("helper.txt", function(err, data) {
  if (err) return console.error(err);
  else console.log(data.toString());
});
```