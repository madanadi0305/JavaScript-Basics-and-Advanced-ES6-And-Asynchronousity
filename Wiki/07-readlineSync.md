# readlineSync

readLineSync is used to have a conversation with the user via terminal.
**readlineSync** tries to let your script have a conversation with the user through the terminal, even when the input/output stream is redirected.
We first need to install readline-async using npm
`npm install readline-async`

- A simple case :

```js
var readlineSync = require('readline-sync');
// importing module

var userName = readlineSync.question('May I have your name? ');
// asking question to user and waiting for user response.

console.log('Hi ' + userName + '!');


// Handling the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {

  hideEchoBack: true
  // The typed text on screen is hidden by `*`
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
```

In the above example, we can write the question to be asked from the user in `readlineSync.question()`. Also, to hide the user response with \*, we have set the value of `hideEchoBack` to true. The output of this case will be as shown below:

```
May I have your name?
CookieMonster
Hi CookieMonster!
What is your favorite food?
****
Oh, CookieMonster loves tofu!
```

- Use `keyInYN` to get the user's response by a single key without the Enter key:

```js
var readlineSync = require('readline-sync');

//keyInYN is used to get user response by pressing a single key only

if (readlineSync.keyInYN('Do you want this module?')) {

  // 'Y' key was pressed.

  console.log('Installing now...');

  // Do something...
}
 else {

  // Another key was pressed.

  console.log('Searching another...');

  // Do something...
}
```

The output of this case will be as shown

```
Do you want this module? y
Installing now...
```

- By using `keyInSelect`, you can let the user choose an item from a list in response. When _keyInSelect_ is used, it makes the list of the array with indexing, passed in it as a parameter.

```js
var readlineSync = require('readline-sync'),

  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],

  index = readlineSync.keyInSelect(animals, 'Which animal?');

console.log('Ok, ' + animals[index] + ' goes to your room.');

```

The output of this case will be as shown

```js
[1] Lion
[2] Elephant
[3] Crocodile
[4] Giraffe
[5] Hippo
[0] CANCEL

Which animal? [1...5 / 0]: 2
Ok, Elephant goes to your room.
```

In the above code, the default case [0] CANCEL is generated automatically and if [0] is given as a response to the above code it returns undefined as there is no element at [0] index.
For example:

```js
[1] Lion
[2] Elephant
[3] Crocodile
[4] Giraffe
[5] Hippo
[0] CANCEL

Which animal? [1...5 / 0]: 0
Ok, undefined goes to your room.
```