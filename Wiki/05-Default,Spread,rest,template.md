# Default Operator
In Javascript, the value of the function parameter is taken as **undefined** if the value is not specified in the function. It results in unexpected errors and it is better to set a default value to a variable in the parameter so that it will take the default value if no value is passed on to a parameter. Therefore, we need a function in Javascript to have optional parameter values which if not given, takes the default value (and ignores the default value if parameter values are given in the function). Let's see how we can do this:

```js
function eatFruit (fruit) {
    fruit = fruit || "strawberry";
    ...
}
```
In the above code, When the function **eatFruit** is called with a parameter it assigns that value to fruit variable but if the same function is called without any argument then it takes the default value of fruit to be **strawberry** which is given on the right side of (||) as shown below:

```js
eatFruit (“apple”); //fruit = “apple”
eatFruit (); //fruit = “strawberry”

```
But using || operator has some limitations. It also takes the default value of the parameter when any falsy value (like **0,"", null** ) are given as arguments which should not be the case. These falsy values must remain as it is and not taken as any default value. Hence, in ES6, this problem is solved by using (=) through which we can pass the default value in the function itself. The ES6 syntax is as follows:

```js
function multiply(a, b = 1)
    { return a * b; }
multiply(5, 2); // 10
multiply(5); // 5

```
If we pass the falsy values (null, " ", 0) to ES6 syntax may result to the following results:

```js
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test('');        // 'string' (num is set to '')
test(null);      // 'object' (num is set to null)

```
In the code above as we pass the falsy value (other than undefined) like **"", null** to the test() function, it returns the same falsy value and does not take the default value (in this case 1). But if the same parameters were passed through (||) operator, it would have taken the default value.

# Rest Parameter

Let's say you have a function with two parameters and you want to pass 5 arguments in the function. What will you do??

With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. For example:

```js
// Without rest parameter
function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3
```
In the above code, no error will be thrown even when we are passing arguments more than the parameters, but only the first two arguments will be evaluated. It’s different in the case with the rest parameter. With the use of the rest parameter, we can gather any number of arguments into an array and pass them into the function for execution. For example:

```js
// es6 rest parameter
function fun(…input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15
```
In the above code, the function fun() can be evaluated using any number of arguments. If 2 arguments are given, both of them are added, if 5 elements are passed as arguments, the function will add all the 5 elements.
Let us take another example to clarify:

```js
function fun(a,b,…c){
    console.log(a+" "+b);     //Mukul Latiyan
    console.log(c);           //[ ‘Lionel’, ‘Messi’, ‘Barcelona’ ]
    console.log(c[0]);        //Lionel
    console.log(c.length);    //3
    console.log(c.indexOf(‘Lionel’)); //0
}

fun(‘Mukul’,’Latiyan’,’Lionel’,’Messi’,’Barcelona’);

```
In the above code, the first argument ('Mukul') is stored as **a**, the second argument ('Latiyan') as **b** and all the other arguments are combined in an array named as **...c** (rest parameter). Please note that the rest parameter can only be the last parameter of the function i.e. in the above example a or b cannot be the rest parameter. Only argument c can be made as to the rest parameter using **...**.

# Spread Operator
The spread operator allows an expression (like objects, arrays, strings) to expand (split into elements) where multiple elements/variables/arguments are expected. For example:

```js
var middle = [3, 4];
var arr = [1, 2, middle, 5, 6];
console.log(arr);          // [1, 2, [3, 4], 5, 6]

```
In the above code, **middle** array is taken as a single element that is inserted in the array named **arr** and thus adds an array element [3,4] into the arr.
 
But using spread operator, the elements of array **middle** can be split into individual elements and are inserted into another array **arr** as individual elements and not as a whole array. For example:

```js
var middle = [3, 4];
var arr = [1, 2, ...middle, 5, 6];
console.log(arr);        // [1, 2, 3, 4, 5, 6]
```
It takes the middle array and splits it into multiple elements. Thus, in the above code 3 and 4 are added as individual elements in the array **arr**.

The Math functions (which take several individual elements as arguments) can also be performed by passing an array or object using **spread** operator. For example:

```js
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

```
In the above code, when the Math.max() function is called using an array as an argument it returns **NaN** since it requires individual elements, but if the array is split using spread operator the function works well and returns **5**.
The object can be also be splitted as follows:

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

```
In the above code, the mergedObj can be made by splitting the obj1 and obj2 into individual key-value pairs and then merge to produce a single object. Since key-value pair must be unique, thus it takes a key as **foo** and value as **baz** which is from obj2 and the remaining key-value pairs are merged as they are in individual objects.

# Template Literals
In JavaScript, a template literal is a way to join strings together and also execute the inline expressions (functions or statements) inside the string. You can apply template literals by writing strings inside back-ticks(` `).
Multi-line strings can be printed using template-literals as the following:

```js
//without using template literals
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"

//Using template literals
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

```
In the above code, when template literals are not used, we need to add \n or \t for a new line or inserting a tab space but using template literals, all new line characters, tabs, spaces, etc. inserted inside the backticks naturally become a part of the string without adding any special character.

 In line expressions can also be evaluated using the following syntax:


```js
//without template literals
var a = 5;
var b = 10;
console.log((a + b) + 'is fifteen' + ' while\n ' + (2 * a + b) + 'is twenty.');

// Result

//"15 is fifteen while
// 20 is twenty."

//with template literals
var a = 5;
var b = 10;
console.log(`${a + b} + 'is fifteen' + ' while\n ' + ${2 * a + b} + 'is twenty.'`);
//Result

//"15 is fifteen while
// 20 is twenty."
```
If the above code is executed without template literals, we need to insert "+" either to join 2 strings or to evaluate the expressions like (a+b). But if we use template literals, the expressions become a part of the string enclosed within the back-ticks. Any expression can be evaluated inside the string using syntax`${expression}` (in this case `${a + b}` ) which calculates (a+b) and replace its value in the final string.