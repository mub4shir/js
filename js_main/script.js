/* var vs let vs const
Scope: scope essentially means where these variables are available for use.

There are two types of scopes in js:
#function scope: visibility is limited to the function
 
*/
// function myFn() {
//   var x = 10;
//   console.log(x); // prints 10
// }
// myFn();
// //console.log(x); // ReferenceError: x is not defined

// // block scope: visibility is limited to block
// if (true) {
//   let x = 10;
//   console.log(x); // prints 10
// }
//console.log(x); // ReferenceError: x is not defined

//# var declarations are function scoped
//# let declarations are block scoped
//# const declarations are block scoped

// redefining and redeclaring features
// a variable decalared using 'var' can be redefined and even redeclared anywhere
// throughout its scope
// //var x = 30;
// console.log(x); // prints 30
// x = 'Hi'; // redefining or re-assigning (works without any error)
// console.log(x); // prints "Hi"

// //var y = 10;
// console.log(y); // prints 10
// var y = 'Hello'; // redeclaring (works without any error)
// console.log(y);

// a variable declared using 'let' can be redefined within its scope but cannot be
// re-declared within its scope
// let x = 11;
// console.log(x); // prints 11
// x = 'IB'; // works without any error

// let y = 12;
// console.log(y); //prints 12
// //let y = 'Scaler'; // error: Identifier y has already been declared

// let z = 13;
// if (true) {
//   let z = 'Fun'; // works without any error as scope is different
//   console.log(z); // prints "Fun"
// }
// console.log(z); // print 13

// a variable declared using 'const' cannot be redefined or re-declared within its scope
// const x = 10;
// console.log(x);
// //x = 11; // TypeError: Assignment to constant variable.

// //const y;
// //y=2; // SyntaxError: Missing initializer in const declaration

// const z = 12;
// console.log(z); // prints 12
//const z = 13; // SyntaxError: Identifier 'z' has already been declared
// every const declaration must be initialized at the time of declaration

// hoisting
// hoisting is a mechanism where variables and function declarations are moved to the
// top of their scope before code execution

// console.log(x); // prints undefined
// var x = 100;
// console.log(x); // prints 100

// variables declared using var are hoisted to the top of their scope and initialized with
// a value of undefined (special type)

//console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 200;
// console.log(y);
// variables declared using let are hoisted to the top of their scope but are not initialized
// with any value.

// variables declared using const are hoisted to the top of their scope but are not initialized
// with any value

//console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 300;
// console.log(z);
// var a = 10;
// {
//   var a = -10;
// }
// let b = a;
// {
//   let b = -20;
//   //console.log(b);
// }
// console.log(b);

/*
JS says,
# a single-threaded, non-blocking, asynchronous concurrent language
# i have a call stack an event loop a callback queue some other apis and stuff
V8(js runtime (inside chrome)) says
# i have a call stack and heap
# if you clone the V8 code base and grap four things like setTimeout,DOM,HTTP req
they are not in their the V8 source

# we have WebAPIs (DOM,ajax,setTimeout)

# the call stack 

one thread == one call stack == one thing at a time

*/
// call stack its a ds which records where in the program we are
// function multiply(a, b) {
//   return a * b;
// }
// function square(n) {
//   return multiply(n, n);
// } // STACK
// function printSquare(n) {
//   // multiply(a,b);
//   var squared = square(n); //square(n);
//   console.log(squared); // printSquare(4)
// } // main()
// printSquare(4);

// const foo = () => {
//   throw new Error('Oops!');
// };
// const bar = () => {
//   foo();
// };
// const baz = () => {
//   bar();
// };
// baz();

// blowing the stack

// const foo = () => {
//   return foo();
// };
// foo();

// blocking  : code that is slow

// var foo = $.getSync('//foo.com');
// var bar = $.getSync('//bar.com');
// var qux = $.getSync('//qux.com');
// console.log(foo);
// console.log(bar);
// console.log(qux);

// browser is blocked until those reqs complete
// asynchronous callbacks

// console.log('hi');
// setTimeout(() => {
//   console.log('js');
// }, 5000);
// console.log('code');

// concurrency & the event loop
// one thing at a time except not really.
// js runtime can only do one thing at one time
// the reason we can do things concurrently is that the browser is more than just runtime
// js runtime ca do one thing at time but the browser gives us these other things
// WebAPIs, these are effectively threads , that you can just make calls to and those pieces of
// browser are aware of this concurrency

// if you're back end person this diagram looks basically identical for node, instead of
// web apis we have c++ apis and the threading is being hidden from you by c++

// event loops job is to check stack and check task queue

// example of setTimeout 0 is defering that execution of code to the end of the stack
// or until the stack is clear

// setTimeout is not the garented timeout of execution but minimum just like setTimeout 0
// doesn't run immediately but nextish
// callback can be any function that other functions calls or callbacks can be more explicitly
// an asynchronous caalbacks

//synchronous
// [1, 2, 3, 4].forEach(function (i) {
//   console.log(i);
// });

// //asynchronous
// function asyncForEach(array, cb) {
//   array.forEach(function () {
//     setTimeout(cb, 0);
//   });
// }

// asyncForEach([1, 2, 3, 4], function (i) {
//   console.log(i);
// });

// setTimeout(() => {
//   var i = 0;
//   while (i < 5) {
//     console.log(i++);
//   }
// }, 5000);

// # everything in javaScript happens inside an execution context
// # two components: memory component(variable environment){stored as key value pair}
// # another is code component {here code is executed one line at a time }
// # aslo known as thread of execution
// # memory creation phase init vars with undefined and for functions whole code is copied to memory component

// # code execution phase

// # call stack || execution context stack || program stack || control stack || runtime stack || machine stack
//  maintains the order of execution of execution contexts;

//  # functions written in below ways behave differently consdering hoisting in the picture
//  var f = function(){
//  	console.log("::");
//  }

//  var f1= ()=>{
//  	console.log("arrow");
//  }

//  so while memory creation phase these will be init as undefined

//  but proper function dec like this whole code is copied to the memory component

//  function f2(){
//  	console.log("hi");
//  }

//  ******************************************************

//  # window is a global object which is created along with the global execution context and along with that global execution context this variable(object) is created

//  # global obejct in case of browsers is known as window

//  # and at global level or base level in the global execution contest
//   this === window => true

//  # whenever you create any variables or functions in the global space these variables and functions get attaced to that global object

//  # so whenever we try to access any function or variable in our program
//  and we dont put anything in front of it, it assumes that it is in the gloabal sapce

//  just like below:

//  var a=10;
//  function b(){
//  	var x= 10;
//  }
// // all are refring to that same memory space
//  console.log(window.a);
//  console.log(a);
//  console.log(this.a);

// **********************************************************
//  var a = 7; // undefined at mem alloc phase
//  console.log(x); //// not defined

//  //////
//  console.log(a);// undefined
//  var a= 7;
//  console.log(a);//// 7

//  # not defined mean no mem alloc

// # loosely typed lan || weakly typed we can do this

// var a;
// console.log(a);
// a=10;
// console.log(a);
// a="hahah";
// console.log(a);

// # undefined also mean in that particular whole code that variable was not assigned anything

// ***************************************************************************
// # lexical env
// # scope mean where u can access a specfic variable or a function in our code
// # scope is directly dependent on the lexical env

// function a(){
// 	var b= 10;
// 	c();
// 	function c(){
// 		console.log(b);
// 	}
// }
// a();

// c function is lexically sitting in a function
// console.log(b);
// # so whereever the execution context is created a lexical env is also created
// so lexical env is local mem along with the lexical env of its parent
// # every execution context has a refrence to its parent's memory

// # scope chain is the chain of all the lexical env's and the parent refrences

// # and it defines wheather a function or a variable is present inside the scope or not

// *********************************************************************************
// # let and const dec are hoisted: these are is the temporal dead zone for the time being

// let a =10; ///  mem is allocated but they are stored in a different mem space than gloabl
// console.log(a);
// var b= 100; // in global space and attached to global object

// # even before single of code is executed js has allocated mem to a as undefined
// # and you cannot access let and const before you have put some value in them

// # temporal dead zone is the time since when let variable was hoisted and till it
// is init some value

// # shrink the temporal dead zone to 0

// *****************************************************************************

// if(true){
//     //compound statement
//     var a=10;
//     console.log(a);
// }

// # used to combine multiple js statements into a group
// # we need to group statements so that we can use multiple statements in a place
// where js expects only one statement

// # let and const are block scoped

// # shadowing same name var outside block

// var a=100;
// {
//     var a =10;
//     let b =20;
//     const c=30;
//     console.log(a); /// 10
//     console.log(b);
//     console.log(c);
// }
// console.log(a) // 10

// # modifies the a again as a is in global scope

// let b=100;
// {
//     var a =10;
//     let b =20;
//     const c=30;
//     console.log(a);
//     console.log(b); ///20
//     console.log(c);
// }
// console.log(b) // 100

// const c=100;
// {
//     var a =10;
//     let b =20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c); // 30
// }
// console.log(c) // 100

// # shadowing behaves in a similar way with function

// const c =100;
// function x(){
//     const c = 30;
//     console.log(c); ///30
// }
// x();
// console.log(c); // 100

// #Shadowing:  Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.

// # Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.”

// #Note: Arrow functions also follow the same scope and variable shadowing rule.

// // not valid with throw error
// let a =20;
// {
//     var a=20;

// }

// # if you want to shadow let variable inside the block scope using var you cannot
// do that

// /////

// valid cases :
// let a =20;
// {
//     let a=20;

// }
// var a =20;
// {
//     let a=20;

// }

// let a =20;
// function x(){
//     var a=20;
// }
// no error because var is inside its boundries

// #  var is function scoped

// # block scope also follow lexical scope chain pattern

// const a = 20;
// {
//     const a =100;
//     {
//     const a=200;
//     console.log(a); //200
//     }
//      console.log(a); //100

// }

// ******************************************************************************

// # A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// # inner function has access to its parents lexical scope

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//    return y;  //// returned fun with lexical scope
// }
// var z =x();
// console.log(z);
// /////........

// z();

// # still maintains the lexical scope even if function is returned

// function x(){
//     var a =7;
//     return function y(){
//         console.log(a);
//     }
//     //// returned fun with lexical scope
// }
// var z =x();
// console.log(z);
// /////........

// # uses of closures:
// - module design pattern
// - currying
// -function like once
// - memoize
// -maintaining state in async world
// -setTimeouts
// -Iterators
// -and many more ....

// ***********************************************************************************

// print();
// console.log(x);
// var x = 7;
// function print() {
//   console.log('hi');
// }
////////////////////////////////////////////////////////////////

// console.log();
// var a = 20;
// {
//   let a = 20;
// }
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// z();
///////////////////////////////////////
// function z() {
//   var b = 9000;
//   function x() {
//     var a = 66;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

////////////////////////////////////////////////
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('hello from js');
// }
// x();
///6 6 6 6 6
///////////////////////////////////////////////////

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('hello from js');
// }
// x();
// 1 2 3 4 5

// let is block scoped and created a new copy every time of itteration

////////////////////////////////////////////////////////////////////////////

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i); // new copy of i on every call
//   }
//   console.log('hello from js');
// }
// x();

// 1 2 3 4 5
//////////////////////////////////////////////////////////////////////////////////////

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();
// // same call
// var close = outer();
// close();
///////////////////////////////////////////////////////////////////////////////////////////

// function outest() {
//   var c = 20;
//   function outer(b) {
//     var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }
// outest()('hello')();
// // same call
// var close = outest()('hello');
// close();
////////////////////////////////////////////////////////////////////////////////////////
// data privacy using closures

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

///////////////////////////////////////////////////////////////////////////////////////

// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

/////////////////////////////////////////////////////////////////////////////////////////////

//disadvantages of closures
// over consumption of memory
// it consumes lot of memory when closure is formed
// and those closed over variables are not garbage collected till the program expires
// if not handled proprely it can lead to memory leaks because that mem is accumulated over time
// also freez the browser if not handled properly
// but some of the modern browsers like v8 and chrome smart garbage collection mechanism
//

// function a() {
//   var x = 0,
//     z = 10;
//   return function b() {
//     console.log(x); /// put debugger here and check in browser
//   };
// }
// var y = a();
// y();

// z is no longer in mem cause it was garbage collected // not used
//////////////////////////////////////////////////////////////////////////////////////////

// function statement aka function declaration
// a();
// function a() {
//   console.log('a called');
// }

// function expression
//b(); b not defined if we call it here diff is hoisting
//console.log(b); // undefiend
// var b = function () {
//   console.log('b called ');
// };
// b();

// anonymous functions

// function() {

// }
// anonymous functions are used when the function are used as values

// named function expression
// var e = function xyz() {
//   console.log('e called ');
// };
// e();
// xyz(); /// not defined

// first class function

// var b = function (param1) {
//   return function () {};
// };

// console.log(b());

// the ability of functions to use functions as values and can be passed as an argument
// to another functions and can be returned from the functions is known as first class functions
// function are first class citizens aka first class functions

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// callback in js
// setTimeout(function () {
//   console.log('timer');
// }, 5000);

// function x(y) {
//   console.log('x');
//   y();
// }
// x(function y() {
//   console.log('y');
// });

// function attachEventListeners() {
//   let count = 0;
//   document.getElementById('clickMe').addEventListener('click', function xyz() {
//     console.log('Button Clicked', ++count);
//   });
// }
// attachEventListeners();

// garbage  collection & removeEventListners

// event listners are heavy, means it takes memory
// even if call stack is empty,  the above program is not freeing up memory (count)
// because you never know when someone on the page can click that button

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// event loop

// the call back functions which come throught promises
// and as well as mutation observer goes inside micro task queue
//

// stravation of call back queue || task queue caused due to
// micro task queue as they are huge or one micro task queue
// generates another micro task in the micro queue

////////////////////////////////////////////////////////////////////////////////

// JS Engine
// parsing
//code=> parsing => tokens => syntax parser => AST (abstract syntax tree)=> compilation

// JIT compilation

// interpretter
//||\\
// compiler

// AOT (ahead of time compilation ) takes a piece of code which is
// going to be executed later and tries to optimize it also produces byte
// code which goes to execution phase
// compilation

// execution

// memory heap and call stack
// garbage collector
// they are all in sync with each other

// mark and sweep alogo used by garbage collector
// other forms of optimizations

// inlinning , copy elision , inline caching

///////////////////////////////////////////////////////////////////////////////////

// console.log('start');
// setTimeout(function cb() {
//   console.log('callback');
// }, 5000);

// console.log('end');

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log('while expires');

// currency model
///////////////////////////////////////////////////////////////////////////////////////

// a function which takes another function as an argument or returns a function from
// it is known as higher order function

// function x() {
//   console.log('hi');
// }
// function y(x) {
//   x();
// }
//  y(x);
const radius = [3, 1, 2, 4];
const area = function (r) {
  return Math.PI * r * r;
};
const circumfrence = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));
