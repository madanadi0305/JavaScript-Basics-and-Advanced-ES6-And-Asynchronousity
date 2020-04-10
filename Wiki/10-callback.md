# Callback Functions

A **callback function** is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a **higher-order function**, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

```js
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1



```
**output**

```js

//output
 Like I always say, eat your vegetables!

```
In the above example, `createQuote` is the higher-order function, which accepts two arguments, the second one being the callback. The `logQuote` function is being used to pass in as our callback function. When we execute the `createQuote` function (1), notice that we are not appending parentheses to `logQuote` when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.

Also, we need to ensure that if the callback function we pass in expects arguments, we supply those arguments when executing the callback (2). In the above example, that would be the `callback(myQuote);` statement, since we know that `logQuote` expects a quote to be passed in.

Additionally, we can pass in anonymous functions as callbacks. The below call to `createQuote` would have the same result as the above example:

```js

createQuote("eat your vegetables!", function(quote){ 
  console.log(quote); 
});

```

Incidentally, you don’t have to use the word “callback” as the name of your argument, Javascript just needs to know that it’s the correct argument name. Based on the above example, the below function will behave in exactly the same manner.

```js

function createQuote(quote, functionToCall) { 
  var myQuote = "Like I always say, " + quote;
  functionToCall(myQuote);
}

```

## Why use callbacks



Most of the time we are creating programs and applications that operate in a `synchronous` manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. In these instances, we want to wait for the response, but we don’t always want our entire application waiting while our data is being fetched. These situations are where callback functions are mostly used.

Let’s take a look at an example that simulates a request to a server:

```js
function serverRequest(query, callback){
  function(){
    var response = query + "full!";
    callback(response);
  }

function getResults(results){
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);

```

**output**

```js
//output
 Response from the server: The glass is half full!

 ```
 In the above example, we make a request to a server with function `serverRequest()` (higher order) and another function getResults (callback). First, the arguments are passed to a variable with name *response* which is modified and then our callback function `getResults` gets executed to print output as shown above...
 
 ## Callback hell

 “Callback hell” refers to heavily nested callbacks that have become unreadable.
 
```js

firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});

```
This is JavaScript for you. It’s mind-boggling to see nested callbacks, but I don’t think it’s a “hell”. The “hell” can be manageable if you know what to do with it. Let's look at how we can manage this situation.

**Solutions to callback hell**

There are two solutions to callback hell:

* Using Promises
* Using Async/await

Before we dive into the solutions, let’s construct a callback hell together. Why? Because it’s too abstract to see `firstFunction`, `secondFunction`, and `thirdFunction`. We want to make it concrete.

## Constructing a callback hell

Let’s imagine we’re trying to make a burger. To make a burger, we need to go through the following steps:

Get ingredients (we’re gonna assume it’s a paneer burger)
1. Get ingredients (we’re gonna assume it’s a paneer burger)
2. Cook the paneer
3. Get burger buns
4. Put the cooked paneer between the buns
5. Serve the burger

If these steps are synchronous, you’ll be looking at a function that resembles this:

```js

const makeBurger = () => {
  const paneer = getPaneer();
  const patty = cookPaneer(paneer);
  const buns = getBuns();
  const burger = putPaneerBetweenBuns(buns, paneer);
  return burger;
};

const burger = makeBurger();
serve(burger);

```
However, in our scenario, let’s say we can’t make the burger ourselves. We have to instruct a helper on the steps to make the burger. After we instruct the helper, we have to WAIT for the helper to finish before we begin the next step.

If we want to wait for something in JavaScript, we need to use a callback. To make the burger, we have to get the paneer first. We can only cook the paneer after we get the paneer.

```js

const makeBurger = () => {
  getPaneerFromFridge(function(paneer) {
    // We can only cook paneer after we get it.
  });
};

```

To cook the paneer, we need to pass `paneer` into the `cookPaneer` function. Otherwise, there’s nothing to cook! Then, we have to wait for the paneer to get cooked.

Once the paneer gets cooked, we get buns.

```js

const makeBurger = () => {
  getPaneerFromFridge(function(paneer) {
    cookPaneer(paneer, function(cookedPaneer) {
      getBuns(function(buns) {
        // Put patty in bun
      });
    });
  });
};

```

After we get the buns, we need to put the patty between the buns. This is where a burger gets formed.

```js

const makeBurger = () => {
  getPaneerFromFridge(function(paneer) {
    cookPaneer(paneer, function(cookedPaneer) {
      getBuns(function(buns) {
        putPaneerBetweenBuns(buns, cookedPaneer, function(burger) {
            // Serve the burger
        });
      });
    });
  });
};

```
Finally, we can serve the burger! But the code appears very messy and difficult to manage which calls for alternate methods to do the same in an organised way.