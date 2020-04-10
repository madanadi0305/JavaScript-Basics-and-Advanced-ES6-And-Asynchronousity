# To-Do : Write a function to print "Hello World" through a function that returns a promise.
The promise resolves if there is no error with the message "Hello world!" and rejects with the message "Error Occured!" if there is an error. Call the function and use .then() to print the returned value. Use .catch() to print the error message if there is an error. Try changing the value of err in the function to true to check what happens.

Hint:

- Open practice09.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
let hello = () => {
  return new Promise((resolve, reject) => {
    var err = false;
    if ((err = false)) {
      resolve("Hello world!");
    } else {
      reject("Error Occured!");
    }
  });
};

hello()
  .then(result => {
    console.log(result);
  })
  .catch(er => {
    console.log(er);
  });
```