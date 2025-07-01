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

===================================================

JS OOP

Object is the root of all objects.
functions are also instances of Object
```
function add(x,y) {
    return x + y;
}
is same as: 

var add = new Function("x", "y", "return x + y")
add(4,5);

add inherites methods of Object like call, apply, bind, toString, valueOf, hasOwnProperty, ...

```

1) Rarely used
```
var obj = new Object();
    obj.name = "James"; // state
    obj.age = 24; // state

    obj.getName = function() {
        return this.name;
    }

```

2) Using functional constructor
Learning JavaScript Design Patterns --> Book by Addy Osmani

    // Avoid this approach: Object owned instance methods
```
    function Product(name, price) {
        this.name = name; // state
        this.price = price; // state

        // behavior, action , methods
        this.getName = function() {
            return this.name
        };

        this.getPrice = function() {
            return this.price;
        }
    }

    var p1 = new Product("Samsung", 89000.00); 
    // heap area of p1 contains
    // name, price, getName, getPrice
    var p2 = new Product("LG AC", 45000.00);
    // heap area of p2 contains
    // name, price, getName, getPrice
```

    // Prefer this approach: class owned instance methods
```
    function Product(name, price) {
        this.name = name; // state
        this.price = price; // state
    }

    // behavior, action , methods
    Product.prototype.getName = function() {
            return this.name
    };

    Product.prototype.getPrice = function() {
            return this.price;
    }
    getName and getPRice is stored as Product protype --> one copy for all objects
    var p1 = new Product("Samsung", 89000.00); 
    // heap area of p1 contains
    // name, price 
    var p2 = new Product("LG AC", 45000.00);
    // heap area of p2 contains
    // name, price
```

3) JSON --> JavaScript Object notation --> Singleton pattern
Prefer JSON if we just have state and not behaviour.
Shape of Object.

keys are string, values can be number, boolean, string, undefined, null, function, object

```
    var obj = {};

    var product = {
        name: "LG AC",
        price: 45000.00,
        getName: function () {
            return this.name;
        },
        setName: function(name) {
            this.name = name;
        }
    }
```

Inherited methods from Object:
1) bind
```
    product.setName("Samsung AC"); // works fine

    let ref = product.setName; // function definition, context is lost [this], 
    // by default this refers to window /global
    ref("Blue Star"); // window.name becomes "Blue Star"

    console.log(product.name); // ???

    Solution:
    let ref = product.setName.bind(product);
    ref("Blue Star"); // product.name is set to "Blue Star"
```

Note: By default "this" injected to function will be "window/global"
using:
"use strict" 
1) window will not be injected to function
2) global hoisting is prevented

====

2) call and apply

```
    // not associated with any object
    function update(name) {
        this.name = name; 
        // by default without "use strict" --> this refers to window
    }

    var employee = {
        name : "Peter",
        age: 31
    }

    var product = {
        name : 'iPhone 16',
        price: 78000.00
    }
    // context.behaviour --> object.method
    // another way of calling
    // method.call(context)
    update.call(product, "Samsung Fold");
    update.call(employee, "Sandy");

    update.apply(employee, ["Sandy"]); // arguments has to be passed in array
```

==============================

Functional Style of programming 
HOF --> High Order function
* Functions which can accept function as argument
* functions which can return function

Treat function as first class member

HOF --> code reusability --> OCP principle [ Closed for Change and Open for Extension]

Commonly used HOF:
https://rxmarbles.com/
1) forEach --> iterate
2) filter --> subset
3) map --> transform [number of input and output elems will be same]
4) reduce --> aggregate [ single value ]

Note: all the above methods are already available for array types
