# Classes

What is a class? From a dictionary: a class is “a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.”

In programming languages, we often say “An object is an instance of a class”. This means that using a class, you can create many objects and they all will share methods and properties.

To understand the idea behind JS classes, we need to understand the constructor functions, prototype, and other related concepts.

## 1. Constructor Functions

Constructor functions are functions that are used to construct new objects. The _new_ operator is used to create new instances based on a constructor function. You may remember using _new_ to create objects such as new Array() but we can also create our own constructor from which we can build new objects. Since Javascript is a functional programming language where everything is just a function, in order to have a class like (creating a blueprint for the objects to be created) functionality in javascript, constructor functions are used, let's see how constructor functions work:

```js
function Vehicle(make, model, color) {
        this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function () {
            return this.make + " " + this.model;
        }
}

```

The function above provides almost similar functionality as that of a Java class, in order to create an object of type Vehicle, 
we do following:

```js
let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");
```

This is perfect! Now, we can create as many objects of type Vehicle as we want by just writing one line code.

### 1.1 Some issues with Constructors

- Since it makes a copy of our Vehicle constructor function for each of our objects, every property and method is copied to the new instance of the Vehicle. The problem here is that sometimes we don’t want all the functions (methods) within our constructor function to be repeated in every object. That is redundant.

- Another problem is that we can’t add a new property or method to an existing object constructor like this:

```js
Vehicle.year = "2012"
```

To add this year property you will have to add it to the parent constructor function (in this case, Vehicle) itself manually by editing the constructor function.

## 2. Prototype

In English, a prototype is an original form that serves as a basis for future products. In software technology, the term prototype is a working example through which a new model or a new version of an existing product can be derived.

Whenever a new function is created in javascript, Javascript engine by default adds a prototype property to it, this property is an object and we call it “prototype object”. By default, this prototype object has a constructor property that points back to our function, and another property ****proto**** which is used to expose the internal prototype of any object.

We can test this by creating a new array.

```js
let y = [];
```

If we take a look at the Prototype of the new y array, we will see that it has a constructor property and array methods like push, pop, concat. It has inherited everything from Array.prototype.

```js
y.__proto__;

[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]
```

When we use the **proto** property, and it points to the prototype property of our constructor function.

Whenever a new instance of the constructor function is created this property is also copied to the instance along with other properties and methods:
