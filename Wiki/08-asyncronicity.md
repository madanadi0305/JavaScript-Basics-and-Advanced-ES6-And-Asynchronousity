# Asynchronicity in JavaScript

It is quite frequent to access a file or database in code. But these processes take a long time and if the program is running sequentially, then the whole program has to wait for that process to get finished. This type of process is known as the _Block_ process.

Different programming languages handle these blocking processes in different ways. Some languages handle these by creating multiple threads. Each blocking process has a separate thread that does not block the other processes.

Multiple threads create a problem of deadlock while accessing the same memory. Deadlock is a situation when one thread is waiting for a resource that is acquired by another thread, and the second thread waits for the resource acquired by the first thread.

![](https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/asynchronicity_basic_1.jpg)

Javascript program is single-threaded and all code is executed in a sequence using the main thread. Javascript handles these I/O requests by using the "asynchronous non-blocking I/O model".

Before understanding the "asynchronous non-blocking I/O model", we must understand synchronous and asynchronous programming. 

## Synchronous and Asynchronous Programming

![](https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/asynchronicity_basics_2.gif)

As shown in the above image, synchronous programming is the execution of the program follows a single path. This type of programming generally blocks the entire code once a blocking I/O operation is encountered i.e. makes the whole program wait for that I/O operation to get completed. 

Asynchronous programming allows multiple things to happen at the same time. When a blocking function is invoked, the code continues to run without blocking the other code and once it is completed, the result is returned.