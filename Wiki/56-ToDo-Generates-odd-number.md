#  To-Do : Write a program to print Odd Numbers using the generator function.
Your task is to create a generator function that generates an Odd Number series of infinite length

- Test your generator function by printing the Odd Number series with a maximum value up to 50.

Hints:

- Open practice32.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
function* oddNumbers() {
  let i = 0;
  while (true) {
    if (i % 2 !== 0) {
      yield i;
    }
    i += 1;
  }
}

on = oddNumbers();

for (let num of on) {
  if (num > 25) {
    break;
  }
  console.log(num);
}
```