# To-Do : Write a function to print "Hello World" through a function that returns a promise with a delay of 0.5 seconds.
The promise resolves if there is no error with the message "Hello world!" and rejects with the message "Error Occured!"
 if there is an error.
  Call the function and use .then() to print the returned value. 
  Use .catch() to print the error message if there is an error. 
  Try changing the if condition in the function to check what happens.

Hint:

- Open practice12.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
let hello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Hello World!");
      } else {
        reject("Error occured!");
      }
    }, 500);
  });
};

hello()
  .then(result => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  });
```
