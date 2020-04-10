# Generators

You must be familiar with functions by now. Once a function starts executing, it runs until it completes, and no other code can interrupt and run in between.

For example:

```js
function normalFunc() {
  console.log('I')
  console.log('cannot')
  console.log('be')
  console.log('stopped.')
}
normalFunc()

//I
//cannot
//be
//stopped
```

The _generator_ is a type of function which does not show run-to-completion behavior as shown above.

The syntax of creating a generator function is:

```js
function *function_name{..}
```

Consider the following example:

```js
function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
//This will be executed first.
//Hello
console.log(generatorObject.next().value); // Line 5
//I will be printed after the pause
//World!
console.log(generatorObject.next().value); //Line 6
//undefined
```
Before going into syntax, we must know what the code is actually doing:

The `generatorFunction()` is a generator function which can pause the program. The keyword `yield` is responsible for _pausing_ the program in between. 

- In the above code, _Line2_ contains the keyword `yield` which pauses the further execution until the generators `next()` function is called.

- Once a generator function is paused by the `yield` statement, it returns the _value_ specified after it. In the above code, it returns "Hello" and "World".

- In _Line3_, an _iterator_ object `generatorObject` of the generator is constructed. But the generator function is yet not executed. Only the iterator is initiated which will be used afterward to call `next()` function.

- The `yield` statement returns an object of the format:
```js
{ 
  value: Any,
  done: true|false
} 
```
- The value property contains the _value_ which the `yield` has to return and if we want to print that value, we need to write `console.log(generatorObject.next().value)`. The other property is the _done_ property which has a boolean value `true or false` depending on whether there is further more `yield` statements or not. If the value of _done_ is _"false"_, it shows that the iterator is yet not finished but if the value is _"true"_, this shows that iterator has been ended.

- In _Line4_, we print the value of the object returned by the `yield` statement by using `.next()` function on the iterator object.
It executes the code till the first `yield` statement is executed. Once it prints, the program gets paused waiting for another `.next()` statement.

- In _Line5_, we call the `.next()` which resumes the execution from where it left in the previous step.

- In _Line6_, since there is no more yield statements, the value returned in _undefined_ and the _done_ property is set to _true_. 

**Note:**
Since the generator is a special type of function, thus they can take _arguments_ as input and may also _return_ the values as output.

## Yield access using  for..of  loop

The above code contains multiple `.next()` statements to access the yield statements.But if we want to call all the `yield` statements in one go, we can use **for..of** loop.

The above code can be written as:

```js
function * generatorFunction() { // Line 1
	console.log('This will be executed first.');
	yield 'Hello, ';   // Line 2
	console.log('I will be printed after the pause');  
	yield 'World!';
}
for(let x of generatorFunction()){
  console.log(x)
}
//This will be executed first.
//Hello, 
//I will be printed after the pause
//World!
```
Through the use of _for..of_ loop, we can access all the `yield` statements at once.

## Iteration Messaging

In addition to generators accepting arguments and returning the values, messages can also be passed, via `yield` and `next(..)`.
The messages can be passed in both directions --`yield ..` can send a message to which `next(..)` will generate a response and vice versa.
To illustrate further, consider the following code:

```js
function *foo(x) {
	var y = x * (yield "Hello");	// <-- yield a value!
	return y;
}

var it = foo( 6 );														//Line1

var res = it.next();	// first `next()`, don't pass anything			//Line2
console.log(res.value);				// "Hello"							//Line3

res = it.next( 7 );		// pass `7` to waiting `yield`					//Line4
console.log(res.value);				// 42								//Line5
```
`yield..` and `next(..)` pair together as a _two-way_ message passing system during the **execution** of the generator.

Let's understand the code step by step.
- In the above code, first, we pass `6` as parameter `x` and made an iterator object `it`. Then we call `it.next()` which starts up `*foo(..)`.
- The `it = foo(6)` operation does not execute the _*foo()_ generator but just initiates the iterator in _Line1_.
- Inside `*foo(..)`, the `var y = x ..` statement starts executing, but then it gets paused at `yield` expression.
- At that point, it pauses `*foo(..)` (in the middle of the assignment statement!), and requests the calling code to provide a result value for the `yield` expression.
- In _Line3_ when we tried to print the value of `res`, it returns "Hello" as it was returned by the paused `yield` statement. 
- The `it.next(7)` statement in _Line4_ provides the paused `yield` statement with a value `7` which further processes the execution and returns the value `42` at the end.

**In the above code, if we tried to pass the argument in the first `it.next()` statement in _Line2_, that value would be discarded. This is because there is no yield statement waiting for any argument. The `yield` statement is executed after _Line2_.**

**Note:**

- There's a mismatch between the `yield` and the `next(..)` call. In general, you're going to have **one** more `next(..)` call than you have yield statements.
This is because the first `next(..)` always **starts** a generator, and runs to the first `yield`. But it's the second `next(..)` call that fulfills the first paused `yield` expression, and the third `next(..)` would fulfill the second `yield`, and so on.