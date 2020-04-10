# To-Do : Write a javascript which requires the fs module. 
This program to read **helper.txt** and print its contents. It contains a function named rf. The operations of this function are wrapped inside a promise which resolves and returns the data in **"helper.txt"** if there is no error. Otherwise rejects it with a message "No file found".
Call the function and use .then() to print the contents of helper.txt. Use .catch() to print the error message if there is any error.

Hint:

- Open practice16.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
var fs = require("fs");
function rf() {
  return new Promise(function(resolve, reject) {
    fs.readFile("helper.txt", (err, data) => {
      //fs.readFIle is an inbuilt function in fs module for reading a file.
      if (err) {
        reject("No file found");
      } else {
        resolve(data.toString()); //toString decodes the buffer value into string format
      }
    });
  });
}

rf()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

**NOTE:** Similar to fs.readFile function in fs module, there is another function, fs.writeFile which takes three arguments: (x, y, function(err, data)) and writes the data y into file x. You will use this function in an exercise.

Run the below command to run your code:

```
node sample.js
```