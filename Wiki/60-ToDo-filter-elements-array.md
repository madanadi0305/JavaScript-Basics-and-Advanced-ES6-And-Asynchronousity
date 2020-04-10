# To-Do : Program to create a generator function that takes an array as a parameter and it should replace the first three elements of the array with 0.
Your generator should yield an array at each iteration.

- Test your generator function by printing the array yielded by a generator function.

Hints :

- Open practice35.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
function* filter(array) {
  let arry = array;
  let i = 0;
  while (i < 3) {
    arry[i] = 0;
    yield arry;
    i++;
  }
}

gen = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

for (let num of gen) {
  console.log(num);
}
```