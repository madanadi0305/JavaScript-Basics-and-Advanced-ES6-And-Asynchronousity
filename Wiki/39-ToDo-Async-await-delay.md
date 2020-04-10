# To-Do : Program of async-await with delay

- Create a function that takes a number as argument and returns two times the number after a delay of two seconds.
- Call the above function three times with different arguments and add their results together.

Hints:

- Open practice19.js
- Copy the below code in that file.
- Commit your code to see output in pipeline.

```js
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x, y, z) {
  const a = await doubleAfter2Seconds(x);
  const b = await doubleAfter2Seconds(y);
  const c = await doubleAfter2Seconds(z);
  return a + b + c;
}

addAsync(100, 200, 300).then(sum => {
  console.log(sum);
});
```