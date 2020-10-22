# To-Do : Write a JS program that prints Hello World using a callback function.


Create a JS program which contains two functions message() and firstFunction().

- firstFunction() has one argument: callback 

- firstFunction() returns the callback

- message() returns "Hello World".

Hint:

- Open practice01.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.


```js
function message() {
    return("Hello World");
  }
  
function firstFunction(callback) {
    return callback();
  }

firstFunction(message);
```