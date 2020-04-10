# Asynchronous programming in js

As mentioned above, Javascript works on **"Asynchronous non-blocking I/O model"**. What this means is, it does not hold the whole program while a blocking process is being executed. Also, Javascript is a single-threaded language and thus does not create the problem of deadlock, as was in the case of multi-threading.

Javascript handles the blocking I/O requests differently. It uses a call stack, event loop, callback queue and some web APIs to handle such requests.

Lets us understand these terms one by one.

Call Stack is an array that operates in _Last In First Out_ fashion. An element is inserted
from the one side (PUSHING), and an element is deleted (POP) from the same side. It keeps a track of which functions need to be executed and in what sequence.

Task Queue is an array that operates in _First In First Out_ fashion. The element is added from one end and deleted from the other end of the queue.

Consider the following image:

![](https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/asynchronicity1.jpg)

As soon as the program starts running, the `main` function runs which gets pushed into the stack. Later it encounters a function call which is `printSquare(4)` and pushes that function into the stack. The `printSquare(4)` function is itself calling the function `square()` and thus pushed into the stack. Similarly, `multiply(n,n)` is pushed.
As soon as the `return` statement of a function is encountered, the function gets popped off from the stack. Thus at first the function `multiply(n,n)` is pooped, then `square()` is popped out and so on. This is how a call stack works.

**How does it help in handling blocking operations**

Consider the following image:

![](https://s3.amazonaws.com/oodles-technologies1/blog-images/af013a01-45ae-43fa-b272-6bbdf42f846d.jpeg)

Let's understand what happens in the above code:

At soon as the program starts its execution, the `main` function gets pushed into the call stack. Then the `console.log('Hi')` statement is encountered, which is pushed into the stack but popped out as soon as it is completely executed.

Next, a function called `setTimeout()` is reached. This is a type of function which propagates delay in the execution of the callback function written into it. In the above code, it delays the execution of the statement `console.log('There')` for 5 seconds. It is a type of blocking function as it is taking much more time than a normal statement.

When the `setTimeout()` function is encountered, it is pushed into the stack and immediately gets popped out from the stack and pushes into the `task queue`. The `task queue` is shown in the image below.

![](https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/event_loop.png)

The function will start execution after at least 5 seconds delay. But meanwhile, it does not block the other part of code, it continues to execute the other statements like `console.log('JSConfEU')`. Once the call stack is empty, the function in the task queue starts executing. If there were more functions in the task queue, then they will be executed in _First In First Out_ manner only after the call stack is **empty**.

This forms a type of sequence or loop in which the function executes. The pushing of the function from the stack into the queue and again pushing the same function from the queue back to the stack(after the stack is empty) in the same sequence is called **Event Loop**.

This is how "Asynchronous non-blocking I/O model" works which does not block the rest of the code and also is single threaded.

If you want to visualize the whole process, you can refer [here](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)