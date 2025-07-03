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

=======

Callbacks are most of the time HOF --> functions which are placed into Callback queues by WebAPi or libuv threads and not directly on to stack.

* Functions which return a function --> Closure
Closure: a concept where returned function can access members of outer function.

In JavaScript, a closure is a function that "remembers" and can access variables from its outer (enclosing) function's scope, even after the outer function has finished executing. 

getProduct(5);

Memoization is an optimization technique in programming where the results of expensive function calls are stored (or cached) so that when the same inputs occur again, the precomputed result is returned instead of re-executing the function.

React.memo() and useMemo()  uses closure for memoization.

==================================

What is the output of below code?
```

    function add(x, y) {
            return x + y;
    }

    console.log(add(4, 5)); // 9

    AST JS tokenizer will evaluate "return" as a valid token and executes it
    x + y is taken as a new token ---> unreachable code

    function add(x, y) {
            return
                x + y;
    }

    console.log(add(4,5)); // undefined
```

===============================

ES2015 / ES 6 features
ES 2020 / ES 7 version is the latest stable version of JavaScript.

1) scope members using let and const
```
    function doTask() {
        const PI = 3.14159; // constant
        var x = 10; // let or var no effect
        if( x > 5) {
            let y = 20; // block scope, not hoisted to function scope
        }
        console.log(y); // error
    }

if we do transpile this code to lower version it introduces a lot of code
Example: 
if( x > 5) {
    var _y = (
        function() {
            var y = 20;
            return y;
        }
    )();
}
```

2) Template string
allows multi-line string with interpolation
```
`
             <div class='card'>
                <div class='card-header'>
                    ${p.name}
                </div>
                <div class='card-footer'>
                    ${p.price}
                </div>
            </div
`

```

3) Destructuring

```
let product =  { "id": 13, "name": "iPhone 16", "price": 98000.00, "category": "mobile" };

extract to local variables:

let {name, price} = product;
console.log(name, price); instead of
console.log(product.name, product.price); 

let colors = ["red", "green", "blue", "purple", "pink"];

let [r, g , ...others] = colors;

console.log(r); // red
console.log(others); // "blue", "purple", "pink"

old Way:
console.log(colors[0]); // avoid this
```

4) Cloning

```
    var data = [6, 2, 11, 62, 46, 31, 9, 4];
    var ref = data; // reference points to same heap area

    ref[1] = 61;

    console.log(data[1]); // 61

    clone:

    var clone = [...data];
    clone[0] = 99;
    console.log(data[0]); // 6 
```

5) Arrow function
```
    let add = (x, y) => x + y;

```

6) Promise API for async operations -> generally used to execute side effects
Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. 
A Promise can be in one of three states:
Pending: The initial state; the asynchronous operation is still in progress.
Fulfilled (or Resolved): The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure (an error).

Assume doTask() is a synchronous function
```
    let result = doTask(); // blocking code
    console.log("End!!!"); // waits for doTask() completion

```


Assume doTask() is a Asynchronous function [Promise based]

```
    let result;
    doTask().then(function (data) {
        // Fulfilled
        result = data;
    },
    function (err) {
        //Rejected
        console.log(err);
    });
    console.log("End!!!"); // non blocking

```
Promise.all([task1(), task2(), task3()]) runs each task on seperate thread, wait for all to finish

Promise.race([task1(), task2(), task3()]) waits for one of them to finish, ignores others

7) async and await
syntactical sugar on Promise API to avoid callback hell

```
Promises and nested callbacks
Dependend API calls
getUser(userId).then(function(user) {
    getOrders(user).then(function(orders) {
        processOrders(orders).then(function(processed) {
            sendEmail(processed).then(function(confirmation) {
                    console.log("Order Processed:", confirmation);
            }))
        })
    })
```

With async and Await:
```
    async function handleOrders(userId) {
        let user = await getUser(userId); // promise API
        let orders = await getOrders(user); // Promise API
        let processed = await processOrders(orders); // Promise API
        let confirmation = await sendEmail(processed);// Promise API
         console.log("Order Processed:", confirmation);
    }
```

8) Generators:
generators are special functions that offer the ability to pause their execution and resume later, yielding multiple values over time.
Useful for SAGA design pattern
we use "yield" instead of "return"

https://caniuse.com/

=============================

DOM: Document Object Model
Tree of Objects in languages like JavaScript / Java / C# for XML / XHTML

document: root object
* access elements
* create elements
document.createElement("div");
* remove elements
* traverse/navigate through elements
* add event handling 

Access elements: 
```
    <p class="para"> </p>
    <div id="card">

    </div>
    <div>

    </div>
    <div>

    </div>
     <p class="para"> </p>
```
1) document.getElementById("card"); 
2) document.getElementsByTagName("div"); // get all divs in document
3) document.querySelector("#card"); // get by id
4) document.querySelectorAll("div"); // by tag name
5) document.querySelectorAll(".para"); get elements which has a class "para"
 

======================================

Recap:
1) JS execution Context: Global Creation Context, Global Execution Context, Function Creation Context, Function Execution Context
2) JS environment: JS stack, WebApi [ async operations like threads or Socket based api], Macro Task Queue and Micro Task Queue [Callback queue], Event loop, Tick
3) OOP: Object, JSON, constructor pattern;  function is also an object of Function extends Object
4) every function inherits call, apply, bind, toString, valueOf, hasOwnProperty 
object.method()
method.call(context, arg1, arg2, arg3);
method.apply(context, [arg1, arg2, arg3]);
5) ES 6 features.
6) DOM: XML in Object tree is DOM --> document

============

Day 2:

Node JS: platform built on V8 js engine runtime for easily building fast, scalable network application.
NodeJS --> event driven, non-blocking I/O model


libuv: libuv is a multi-platform C/C++ library that provides support for asynchronous I/O based on event loops. --> does the work same as WebApi for Browsers

https://github.com/nodejs/node

const {
  getFipsCrypto,
  setFipsCrypto,
  timingSafeEqual,
} = internalBinding('crypto'); --> Connects to C/C++ code
lib --> js library
src --> c/c++ codes.

old version process.binding();

===================

Where can i use NodeJS?
* Building traditional web application --> server sends presentation pages for request
* Build RESTful WS / GraphQL --> sending formats like JSON / XML for represention of data
* Real time application --> Chatbot
* Streaming apis like OTT
* For web application development also we use nodejs
Why?
1) We can choose to write our code in different languages like TypeScript / CoffeeScript / LiveScript/ DART, ...

TypeScript -> on top of JS gives me static typing
```
    let name:String = "Roger";
    name = 50; 
```


[TypeScript / CoffeeScript / LiveScript/ DART] --> compiler --> JS code --> JS engine

Latest version of JS --> transpile /transcompiler --> lower version of JS compatable with target machine

2) Testing :Unit testing, E2E testing
3) Linting -> Static code analysis --> Naming conventions and Good programming practices
4) Minify and Uglify code: minification eliminates all extra white spaces, uglify changes length members to shorter version.
5) bundle CSS and JS files

Without bundling:
1) We need to include in a proper order
2) each script inclusion of CSS reference leads to a network call

```
    index.html
    <script src="customer.js"></script>
    <script src="product.js"></script>
    <script src="order.js"></script>
    <script src="payment.js"></script>
    ...
```

With bundling:
bundle.js contains minfifies and uglified versions of customer.js, product.js, order.js, payment.js
```
 index.html
    <script src="bundle.js"></script>
```

NodeJs uses package managers like Maven / Gradle for Java. PIP for python
Package managers:
* NPM --> default
* YARN
* PNPM --> good for mono repository and Micro frontend

use package managers to manage dependencies / devDepenendencies and also to run scripts.

========
node_example % npm init --y

creates package.json --> similar like pom.xml

NodeJS by default uses CommonJS module system.
Other module systems:
1) CommonJS
2) ESM --> ES6 Module system
3) AMD --> Asynchronous Module Definition
4) SystemJS
5) IIFE --> Immedidate Invoke Function Expression

Module system brings in the concept of visiblity like private and public members

IIFE:
```
    let ShopModule = (function() {
        var data  = "Shop Data"; // private 
        function setData(d) {
            data = d;
        }
        function getData() {
            return data;
        }

        return {
            getData,
            setData
        }
    })();

     let CustomerModule = (function() {
        var data  = "Customer Data"; // private
        var name = "Roger"; // private
        function setData(d) { // private
            data = d;
        }
        function getData() {
            return data;
        }
        function getName() {
            return name;
        }

        return {
            getName,
            getData
        }
    })();

    CustomerModule.getData(); 
    CustomerModule.setData("Danny"); // error, private

    ShopModule.getData(); 
```

CommonJS Module System:
1) one file is one module
2) all members in a file is private by default
3) use module.exports to export a member
4) use require() to import a member into other modules

====
Unit Testing JS frameworks:
1) Jasmine [default configured for Angular]
2) Mocha [ good for API testing]
3) JEST [ default configured along with React Testing Library]

Assertion libraries are different for each. 
data.to.be(1); data.toBe(1);

3rd party assertion library --> chai.js
====
install JEST as development dependencies
npm i jest -D 

this installs into "node_modules" folder

Team members:
node_example> npm install

checks package.json and installs dep / devDep /peerDep

npm test --> looks for files with *.test.js or *.spec.js

Unit testing *.test.js
E2E testing *.spec.js

=========

JavaScript build tools:
* Grunt
* Gulp
* Webpack [default used for Angular/React scaffolding code]
* Vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

In nodejs
tsc customer.ts --> customer.js
tsc product.ts --> product.js

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

=============================
```
Step 1: initialize node js project
webpack_example % npm init -y

Step 2: install development dependencies
webpack_example % npm i webpack webpack-cli @babel/core babel-loader @babel/preset-env -D

We start using ESM -> ES6 Module system instead of CommonJS module system
import {filter} from './lib'; 
instead
of
const {filte} = require('./lib');

babel-loader loads ESM
loaded file is given to @babel/core --> transpiler

@babel/preset-env --> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

let add = (x,y) => x + y; is converted to

function add(x, y) {
    return x + y;
}

A polyfill is a piece of code (typically JavaScript) that provides modern functionality to older browsers that don't natively support it. 

Promise, Map, Set, Generator --> not available in older JS engine.

core-js: Includes polyfills for ECMAScript up to 2023: promises, symbols, collections, iterators, typed arrays, many other features, ECMAScript proposals

import 'core-js/actual/promise'; <--- Pollyfill 
Promise.resolve(42).then(it => console.log(it)); // => 42

===

npm i css-loader style-loader -D

this allows to import CSS file in JS file

import './styles.css' <-- css-loader loads this file

style-loader places the css inside <style> tag

<style>
    .body {

    }
    table {

    }
</style>

======

npm i webpack-dev-server html-webpack-plugin -D

webpack-dev-server: it's a miniature web server, good for testing/development environment. In production we might need a full fledged servers like Apache, IIS, NginX, ...

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
index.html
<script src="bundle.js"> </script>

This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

<script src="bundle.fsdf$2#cd4.js"> </script>

Also in bigger projects we have many bundles
<script src="bundle.fsdf$2#cd4.js"> </script>
<script src="cart.bundle.js"> </script>
<script src="vendor.js"> </script>

npm run dev
asset bundle.d2bd1b07.js 5.53 KiB [emitted] [immutable] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 1.28 KiB
  ./src/index.js 871 bytes [built] [code generated]
  ./src/lib.js 438 bytes [built] [code generated]
webpack 5.99.9 compiled successfully in 303 ms


npm run prod

asset bundle.2ecf3b6f.js 609 bytes [emitted] [immutable] [minimized] (name: main)
orphan modules 438 bytes [orphan] 1 module
./src/index.js + 1 modules 1.28 KiB [built] [code generated]

```

https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks

@babel/preset-react: JSX to JS object conversion
JSX: JavaScript and XML
```
    <div className="card">
        <h1 className="card-header">
            ${product.name}
        </h1>
        <div className="card-body">
            ${product.category} Rs.${product.price}
        </div>
    </div>

```

React Demystify
JSX has to be configured to JS object .

https://github.com/chentsulin/awesome-react-renderer

JS object can be given to different renderes for Tv / Mobile / Web to convert to UI

https://www.youtube.com/watch?v=t1-KshFI-LQ

============

Day 3

* Server Side Rendering
    Data --> Presentation --> server --> sends Presentation pages like PDF / HTML
    * Heterogenous clients --> Web / Tv / Mobile / Desktop
   * Multi page applications 
* Client Side Rendering 
        * light payload --> only JSON / XML is sent between client and server
     * Single Page Application
     * Mobiles / Tv / Desktop could consume then and create pages on client machined

* DOM 
* jQuery library which simplified the way DOM was used
```
    $("<div/>") --> document.createElement("div")

    $("div .card") --> document.querySelectorAll("div .card");
```
* Single Page Application
* templates
1) Mustache {{ }}
2) Handlebars #
3) EJS / PUG / JADE
4) Knockout
5) underscore

MVC pattern
Model View Controller

* Backbone library --> Model and Controller support
* AngularJS --> Google --> MVC based framework
* Facebook started it's own view library
    XHP --> 2010
    FaxJS --> 2011
    ReactJS -> 2012
    in 2013 --> Open Source
    Khan Acedemy --> sophie alpert
    Netflix
* Angular --> Google
* Vue / Svelte

============================

React --> View library --> Facebook
JSX --> JavaScript and XML

React Elements --> wrapper for UI elements like DOM
* React.createElement() core API
* Functional components --> function returns JSX --> React.createElement

```
function ProductCard ()(
    return <div className="card">
    <h1 className="card-header">
        {product.name}
    </h1>
    <div className="card-body">
        {product.category} Rs.{product.price}
    </div>
</div>)
```

* Class Component will have render() method returning JSX --> React.createElement

Use Functional component [98%] over class components [2%]

=============

npm i yarn -g

two ways to create a react application.
1) npx create-react-app customerapp
2) yarn create react-app customerapp

This creates a scffolding by using webpack

```
"start": "react-scripts start",
webpack serve --mode development

"build": "react-scripts build",
webpack --mode production

"test": "react-scripts test",
npm test
    "eject": "react-scripts eject"

ejects the application to low-level webpack application
for customization

```

Thinking in React:
Atoms: The most basic building blocks, like buttons, input fields, or icons. 
<button type="button">OK</button>
95 % of the time we don't build them, use existing libraries
* https://react-bootstrap.netlify.app/docs/components/buttons
* https://primereact.org/
* MUI
* https://opensource.adobe.com/spectrum-web-components/components/button/

Molecules: Combinations of atoms that form a functional unit, like a search form (input field + button). 
* Card
* Navbar
Organisms: More complex components made up of molecules and potentially other atoms
Card list

Templates: Layout structures that arrange organisms to define page structure. 

Pages: Specific instances of templates filled with real content. 

=============

Class Component
* state and behaviour
* extends Component or PureComponent

=====
```
    state = {

        questions:  [{
            "id": 1,
            "question": "What is MVC?" ,
            "options": ["Language", "Library", "Framework", "Application"],
            "correct" : "Framework"
         },
         {
            "id": 2,
            "question": "What is the smallest unit of data in a computer?" ,
            "options": ["Gigabyte", "Bit", "Byte", "Terabyte"],
            "correct" :  "Bit"
         },
         {
            "id": 3,
            "question": "What is the full form of PROM ?",
            "options": ["Program read-only memory", "Primary read-only memory", "Programmable read-only memory", "Program read-output memory "],
            "correct" :  "Programmable read-only memory"
         },
        {
            "id": 4,
            "question": "What is URL ?",
            "options": ["Undistributed Resource Locator", "Unified Resource Locator", "Uniform Region Locator", "Uniform Resource Locator"],
            "correct" :  "Uniform Resource Locator"
         }
        ]
    }
```

Testing:
Unit Testing Components
E2E Testing

Unit Testing React Components is based on JEST --> REACT TESTING LIBRARY RTL

getByText(/Customer Application/i)

getByRole('button')

getByPlaceHolderText(/search by name/)

