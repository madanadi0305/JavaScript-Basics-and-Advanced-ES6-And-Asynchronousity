# What is “this” keyword in JavaScript

Let’s go back to the school days when we learned about pronouns.

```
Phelps is swimming fast because he wants to win the race.
```
Note the use of the pronoun “he”. We don’t directly address Phelps here but use the pronoun he to refer to Phelps. Similarly, JavaScript uses the `this` keyword as a reference to the object in context i.e the subject.

Example:

```js
var car= {
make: "Lamborghini",
model: "Huracán",
fullName: function () {
console.log(this.make+" " +this.model);
console.log(car.make+ " " +car.model);
}
}
car.fullName();

//Lamborghini Huracán
//Lamborghini Huracán

```
In the above code, we have an object car that has the properties make, model and fullName. The value of fullName is a function that prints the full name of the car using 2 different syntaxes.

* Using this as in ` this.make+” “ +this.model`, the *this* refers to the object in context (which is car) so `this.make` is effectively `car.make` and so is `this.model` .
* Using dot(.) notation, we can also access the properties of objects, `car.make` & `car.model`.

Hence, both the syntax results in the same result in the console.
To understand `this` binding, we have to understand the **call-site**: the _location_ in code where a function is **called** (not where it's declared). This is because, how `this` binds depends upon the context or the call-site.
To illustrate what is call-site, look at the following code:

```js
function baz() {
    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    console.log( "foo" );
}

baz(); // <-- call-site for `baz`
```

Let us understand more about `this` keyword and how it binds depending upon the call-site through the following example:

```js
function foo(num) {
    console.log( "foo: " + num );
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0
```
Why did `console.log(foo.count)` gave the result `0`, although `foo` is called `4` times? This is because `foo` is called in _global scope_ and thus `this.count` in the function `foo` is bind to the call site of `foo` which is `global` and thus `this.count` in the function `foo` creates a global variable `count` whose value is incremented to `4`. Moreover, `foo.count` is another variable that is bound to function `foo` and it has nothing to do with `this.count`.

Consider another example to elaborate:

```js
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo(); //undefined
```
When the function `foo` is invoked, it calls the function `this.bar` implicitly. Since the calling site of `foo` is _global scope_, the Engine binds `this.bar` to the global scope and finds the function `bar` in the global scope which it found.
Now, the function `bar` itself calls `console.log(this.a)` and calling site of the function is `global` and the Engine does not find the variable `a` in the global scope, thus when the function `foo` is invoked, it returns `undefined`.

**Another example**

`this` can also be binded using an object reference. Let us take an example to understand.

```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
foo();     // undefined
```
The call-site of `foo()` is although _global_ but it is refernced by an object `obj` which binds `this` to `obj` and thus could find the variable `a` in its scope and prints `a`.

But when `foo()` is called without any reference, it printed `undefined` as it binds `this` to the global scope(call-site of `foo`) and found no variable named `a`.

**Note:**

`this` can also be binded externally using keywords such as `call`, `apply`, and `bind`.

### call()

Consider the following example:

```js
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
```
In the above code, we have an object `obj` and a function `addThings` which are NOT related to each other. But as we write the following line of code, `this.things` in the function `foo()` gets its binding.

```js
console.log( addThings.call(obj, 1,4,6) );      
// Output  
//14
```
This is because the first parameter in `.call()` is the context in which `this` must bind trough which `this.things=3` and thus `return this.things+a+b+c` gives `3+1+4+6 = 14`.

The `call()` method does not make a **copy** of the function it is being called on, it's just calls the function and binds the context with `this`.

### apply()

It is similar to `call()`. The only difference is that we can pass arguments using `apply()` through an array also.

The same example can be done using `apply()` in the following way:
```js
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
let arr = [1,4,6];
console.log( addThings.apply(obj, arr) );

//Output
//14
```
The above code binds the `this.things` in addThings() function and but does not need to take the other three elements separately, it can take only one argument i.e. array containing all the other arguments.

### bind()

It **copies** the context function and then binds `this` to the **context**. It returns the copy of function with different context with which it is bind.

For example:

```js
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};
console.log( addThings.bind(obj, 1,4,6)() );

//Output
//14
```
In the above code, `this` is bind with the object `obj`. Notice that `bind` returns a function that is invoked in `console.log(..)` statement.

All the above methods are used to bind `this` to different contexts. But there are minor differences. `call()` and `apply()` has a difference in accepting the arguments but they both use the same function. On the other hand, `bind()` copies the function with the required context and returns that function which needs to be called.