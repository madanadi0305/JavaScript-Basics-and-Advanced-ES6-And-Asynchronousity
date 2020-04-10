# What is a Promise?

In modern JavaScript-based applications, both on the client-side and the server-side, network requests are very common. In the browser, these could be HTTP calls from the client to a server. In the server, these could involve queries to a database. Because JavaScript is single-threaded, it must execute when waiting on a network request otherwise no other code could execute which will result in the browser constantly waiting for a response or the server unable to service other requests.

If a function completes execution, but its result will not be available until some event happens in the future (ex- a network call returning), it can return a Promise object in response. What it means is that the function promises to eventually return the resulting value to us whenever it is available.
A promise is an object that may produce a single value some time in the future
: either a resolved value or a reason that it’s not
resolved (e.g., a network error occurred). A promise may be in one of 3 possible states:
*fulfilled, rejected*, or *pending*. Promise users can attach callback functions to handle the
fulfilled value or the reason for rejection.


## How Promises Work

A Promise consists of two parts:

* The first part creates the Promise and defines the conditions of what is considered *successful* and *not successful*.
* The second part describes what to do when the *successful* condition is met with the ```resolve()``` function, and what to do when the *not successful* condition is met with the ```reject()``` function.


A promise is `settled` if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.

Once settled, a promise can not be resettled. Calling `resolve()` or `reject()` again will have no effect. The immutability of a settled promise is an important feature.

Take a look at below example:

```js
// Promise                  
// A Promise structure has 2 parts
//First part
//create the Promise and define the success/

let promise1 = new Promise( (resolve, reject) => {

let dataReceivedSuccessfully = false;
if (dataReceivedSuccessfully)
  resolve('Data Available!');
if (!dataReceivedSuccessfully)
  reject('Data Corrupted!');
})

//Second part
//define the actions for when the conditions are fulfilled

  promise1.then( (message) => {
   console.log(message);
   }).catch( (message) => {
      console.log(message);
})

```
Thus, in the first part of a Promise we create the Promise, using the in built `Promise()` object in JavaScript ES6:

```js
let promise1 = new Promise( (resolve, reject) => { ... } );

```

The `Promise()` object is a built-in object in JavaScript ES6 which takes a function as an argument. This single function, in turn, takes two arguments, each of which is also functions — `resolve` and `reject`. So keep in mind that the (resolve, reject) arguments in Promises are actually callback functions.

In the function body, we define when to invoke the `resolve()` function and `reject()` function:

```js
if (dataReceivedSuccessfully)
  resolve('Data Available!');
if (!dataReceivedSuccessfully)
  reject('Data Corrupted!');

```

In the second part of a Promise, we define the actual `resolve()` and `reject()` functions. It means that we define what to do when the successful condition (i.e. resolve()) is met, and what to do when the not successful condition(i.e. reject()) is met.

```js
promise1.then( (message) => {
   console.log(message);
// define the resolve() function,

}).catch( (message) => {
    console.log(message);
// define the reject() function,
})

```

When the `resolve()` and `reject()` functions are invoked, they can be invoked with arguments — these can be strings, arrays, objects or nothing.

In our simple example, the argument passed by the `resolve()` and `reject()` functions are of type *string*. The arguments from the `resolve()` function in the first part of the Promise are meant for the `.then()` function in the second part of the Promise. In the same way, the arguments from the `reject()` function in the first part of the Promise are meant for the `.catch()` function in the second part of the Promise.

Note that these messages are being passed from the `resolve()` and `reject()` functions and are being executed in the `.then()` and `.catch()` section of the Promise.

## Passing Objects and Arrays in resolve() and reject()

In the previous example, we used a simple string message as an argument for the `resolve()` and `reject()` functions. It is important to note that the `resolve()` and `reject()` functions take only a single argument. Now, what do you do if you want to pass more than one piece of information since you are limited to using only a single argument?

The `resolve()` and `reject()` functions allow you to pass only a single argument, but that single argument can be of type string, number, boolean, array or object.

The way you can pass more than one piece of information is to pass it as an object or an array.

The following example illustrates how you can pass multiple pieces of information using the single argument of the `resolve()` and `reject()` functions, by passing them as part of a single large object or an array.

```js
//Passing Arrays and Objects as arguments

let dataReceivedSuccessfully = true;

//define the Promise
promise1 = new Promise( (resolve, reject) => {

//construct the array or object you want to pass
let some_array = [1, 2, 3, 4, 5];  
let some_object = {color:'red', person:{ name: "mike", age: '35'} };

//define under what conditions to invoke resolve() and reject()
  if (dataReceivedSuccessfully)
    resolve(some_array);
    //passing an Array as the single argument
  else
    reject(some_object);
    //passing an Object as the single argument

});

//define the executing function for resolve() and reject()
 
  promise1.then((message) => {
    console.log(message);

//if dataReceivedSuccessfully=true, console.log shows 1,2,3,4,5

}).catch( (message) => {
     console.log('error');
     console.log({message.color});

//if dataReceivedSuccessfully=false, console.log shows "error" "red"
})
```
It is also possible to leave the passing parameters empty in Promises.

## More than one Promise

Now that we understand the basic syntax and structure of Promises, let’s learn how to use more than one Promise.

When multiple promises are used, they can be chained together — with the `.then()`. the function of the first Promise returning the next Promise, and so on.

In the following example, we create multiple Promises. This might be a typical case where we want to handle multiple async calls.

```javascript

var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
 
 setTimeout( ()=>{
 resolve("data received from 3");
 }
,2000);
//We simulate a delay in data receipt by using setTimout() function
})

promise1.then((message) => {
     console.log(message);
     return promise2; //return promise2 when promise1 resolves.
}).then((message) => {
     console.log(message);
     return promise3; //return promise3 when promise2 resolves.
}).then((message) => {
     console.log(message); //resolve promise3.
})

```
Note that in the above example, Promises resolve in sequence one after another. `setTimeout()` is a function which is used to create a delay of 2000 milliseconds before resolving promise 3

The console.log output of the above is:

```
   ‘data received from 1’
   ‘data received from 2’
 (....there will be a 2 second simulated delay)
   ‘data received from 3’

```


## Solution of callback hell: Use promises

Let's get back to our previous example of Callback hell and let's see how we can write better code using promise object.  Promises can make callback hell much easier to manage.

```js
const makeBurger = () => {
  return getPaneerFromFridge()
    .then(paneer => cookPaneer(paneer))
    .then(cookedPaneer => getBuns(cookedPaneer))
    .then(bunsAndPaneer => putPaneerBetweenBuns(bunsAndPaneer));
};

// Make and serve burger
makeBurger().then(burger => serve(burger));

```
If you take advantage of the single-argument style with promises, you can tweak the above to this:

```js

const makeBurger = () => {
  return getPaneerFromFridge()
    .then(cookPaneer)
    .then(getBuns)
    .then(putPaneerBetweenBuns)
    .catch(err => console.log(err));
};

// Make and serve burger
makeBurger().then(serve);

```
Much easier to read and manage.

But the question is how do you convert callback-based code into promise-based code.

##

To convert callbacks into promises, we need to create a new promise for each callback. We can `resolve` the promise when the callback is successful. Or we can `reject` the promise if the callback fails.

```js
const Fridge = {
  paneerCount: 3,
  paneerBox : [paneer,paneer,paneer]
  getPaneer: function(){
    return this.paneerBox[--this.paneerCount];
  }
}

const getPaneerPromise = _ => {
  return new Promise((resolve, reject) => {
    if (Fridge.paneerCount>=1) {
      resolve(Fridge.getPaneer());
    } else {
      reject(new Error(“No more paneer!”));
    }
  });
};

const cookPaneerPromise = paneer => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // Cooking
      resolve(paneer);
    }, 1000 * 60 * 2);
  });
};

```