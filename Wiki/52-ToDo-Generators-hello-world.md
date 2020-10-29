# To-Do : Write a Program to illustrate the use of generator function by yielding the following statements :

- 'Hello World!!!'
- 'This is Konfinity Infotech !!'

and also return the following message inside your generator function:

- 'Learn to code, talk is cheap'

Hints:

- Open practice29.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
function* generatorFn() {
  yield "Hello World!!!"; // [1]
  yield "This is Konfinity Infotech !!";
  return "Learn to code, talk is cheap";
}

var gen = generatorFn();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```