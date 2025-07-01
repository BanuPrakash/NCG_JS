# JS and REACT
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/
https://github.com/BanuPrakash/NCG_JS

Softwares Required:
NodeJS Latest LTS
Visual Studio Code.
Chrome Web Browser
```

* JavaScript
* NodeJS
* React
* Redux Toolkit

===============================

JavaScript : Scripting language, loosely typed language which executes in JavaScript engine

JavaScript engine: V8, Rhino, Chakra, Nashorn, ....


loosely typed language: data type is decided by the literal value

var data = "Test"; // string
data = 45; // number
data = true; // boolean

file.js

```
    var g = 100;

    function doTask() {
        console.log(d); // undefined
        var a = 10;
        var b;
        c = 30; // hoisted to global scope
        if (g > a) {
            var d = 40; // hoisted to function scope
            b = 20;
        }
        console.log(g, a, b, c);
    }
    doTask();
    console.log(g,  c);
```


Internals of JS engine, stack, callback queue, WebApi

```
    console.log("Hello!!!");
        function execute() {
            setInterval(function doTask() {
                console.log("Timed!!!");
            }, 1);
        }
        execute();
        Promise.resolve(function done1() {
            console.log("P1");
        })
          Promise.resolve(function done2() {
            console.log("P2");
        })
      
    console.log("Bye!!!");
```

Assuming Java Thread for timer.

```
    class TimerThread extends Thread {
        private Queue queue;
        private long duration;
        private Method callback;

        public TimerThread(Queue q, long d, Method m) {
            this.queue = q;
            this.duration = d;
            this.callback = m;
        }

        public void run() {
            while(true) {
                Thread.sleep(duration);
                queue.push(callback);
            }
        }
    }

     class EventLoop extends Thread {
        MacroTaskQueue queue;
        MicroTaskQueue queue;

        public void run() {
            while(true) {
                1) traverse thro micro task queue
                    check if stack is empty
                    push methods from micro task queue on to stack
                2) traverse thro macro task queue
                    check if stack is empty
                    push methods from macro task queue on to stack
            }
        }
     }
```

Timers, Events --> Macro Task Queue
Promise --> Micro Task Queue

Note: By default the return value of a function is undefined.

Resume @ 11:30




