# To-Do : A JS program that prints Hello World using setTimeout function with a delay of 1 second.


Create a JS program which contains one function callback which prints "Hello World".

setTimeout expression passes a callback and a timer of 1 second as argument.



Hint:

- Open practice01.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.


```js
var callback = function() {
    console.log("Hello World!");
}

setTimeout(callback, 1000);
```