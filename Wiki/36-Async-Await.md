# Async and Await

Async function provides us with a clean and concise syntax that enables us to write less code to accomplish
 the same outcome we would get with promises. Async is nothing more than writing promises in a different way.

Async functions are created by writing a word `async` before the function declaration like this:

```js
const asyncFunction = async () => {  
  // Code}
```
Asynchronous functions always return a `promise`. 
Another keyword can be used in Asynchronous functions which is `await`.
 When you _await_ a promise, the function is **paused** in a non-blocking way until the promise settles
i.e. either it gets resolved or rejected. If the promise fulfills, you get the value back. 
If the promise rejects, the rejected value is thrown.

Await returns whatever the value that the promise returns when it is settled.

## async
- Async functions enable us to write promise-based code as if it were synchronous,
 but without blocking the execution thread.
- It operates asynchronously via the event-loop.
- Async functions will always return a value. 
If the function throws an error, the Promise will be rejected.
 If the function returns a value, the Promise will be resolved.

```js
async function firstAsync() {
  return 27;
}

firstAsync().then(alert); // 27
```
Running the above code gives the alert output as 27, using `.then` function over the async function `firstAsync()`. The use of `.then()` function proves that the async function returned a _promise_.

## await

The await operator is used to wait for a Promise to get resolved or rejected.
 It can be used inside an Async block only.
The keyword Await makes JavaScript wait until the promise returns a result. 
It has to be noted that it only makes the `async` function block wait and not the whole program execution.

The code block below shows the use of Async Await together.

```js
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }
};

firstAsync();
```

### Things to remember when using Async Await
We can’t use the await keyword inside of regular functions.

```js
function firstAsync() {
  let promise = Promise.resolve(10);
  let result = await promise; // Syntax error
}
```
To make the above function work properly, we need to add `async` before the function `firstAsync();`

For example:

```js
async function sequence() {
  await promise1(50); // Wait 50ms…
  await promise2(50); // …then wait another 50ms.
  return "done!";
}
```

The above code takes 100ms to complete.

This is because it is happening in sequence. Two promises are returned, both of which takes 50ms to complete. The second promise executes only after the first promise is resolved. This is not a good practice, as large requests can be very time consuming. We have to make the execution parallel.

That can be achieved by using `Promise.all()` .

### Promise.all()

The `Promise.all()` method returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

```js
async function sequence() {
    await Promise.all([promise1(), promise2()]);  
    return "done!";
}
```
The `promise.all()` function resolves when all the promises inside the iterable have been resolved 
and then returns the result.

## Solution to callback hell: Use asynchronous functions

With asynchronous functions, you can write `makeBurger` as if it’s synchronous again!

```js
const makeBurger = async () => {
  const paneer = await getPaneer();
  const cookedPaneer = await cookPaneer(paneer);
  const buns = await getBuns();
  const burger = await putPaneerBetweenBuns(cookedBeef, buns);
  return burger;
};

// Make and serve burger
makeBurger().then(serve);
```
