/* 

✅✅✅Scope & Hoisting in JavaScript
These are two important JavaScript concepts, especially when working with var, let, const, functions, and blocks.


✅✅✅✅✅✅✅✅✅✅✅✅Scope✅✅✅✅✅✅✅✅✅✅✅✅✅

Scope determines where a variable can be accessed in your code.
In simple words:
Scope = Where can I use this variable?

➡️JavaScript mainly has:
Global Scope
Function Scope
Block Scope


✅✅✅1. Global Scope

A variable declared outside any function or block is in the global scope.

let name = "Raju";
function greet() {
    console.log(name);
}
greet();
// Output:Raju

📌name can be accessed inside the function because the function can access variables from its outer scope.



✅✅✅2. Function Scope
Variables declared with var inside a function are available throughout that function.

function test() {
    var x = 10;

    console.log(x); // 10
}
test();
console.log(x); // ❌ ReferenceError
x exists only inside test().

⚠️Important:
var is function-scoped.



✅✅✅3. Block Scope

A block is code surrounded by {}:
{
    // block
}

➡️The block can be:

if (...) {
}
for (...) {
}
while (...) {
}

or simply:
{
}



➡️let and const are block-scoped.

{
    let x = 10;
    const y = 20;

    console.log(x); // 10
    console.log(y); // 20
}
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError




✅✅✅4. var vs let/const Scope
This is a very important difference.

➡️var
if (true) {
    var x = 10;
}
console.log(x);
// Output:10
📌var ignores the block scope.


➡️let
if (true) {
    let x = 10;
}
console.log(x);
// Output:ReferenceError

📌Because let is block-scoped.



✅✅✅5. Scope Chain

Suppose:

let global = "Global";
function outer() {
    let outerVariable = "Outer";

    function inner() {
        let innerVariable = "Inner";

        console.log(innerVariable);
        console.log(outerVariable);
        console.log(global);
    }
    inner();
}




📌The inner() function can access:
inner scope
     ↓
outer scope
     ↓
global scope

This is called the scope chain.
JavaScript searches for a variable from the innermost scope outward.




✅✅✅✅✅✅✅✅✅✅✅✅Hoisting✅✅✅✅✅✅✅✅✅✅✅✅✅
Hoisting is JavaScript's behavior where declarations are processed before the code is executed.

A common beginner-friendly way to think about it is:
Declarations are made available to their scope before execution reaches them.
But not all declarations behave the same way.



✅✅✅1. Function Declaration Hoisting
Function declarations are fully hoisted.

➡️So this works:
greet();
function greet() {
    console.log("Hello");
}
// Output:Hello

Conceptually, you can think of JavaScript as making the function declaration available before execution.



✅✅✅2. var Hoisting
var declarations are hoisted, but their initial value is undefined.

console.log(x);
var x = 10;
// Output:undefined

➡️JavaScript sees the above code like this:
var x;
console.log(x);
x = 10;

So:
Declaration → hoisted
Initialization → stays where it is




✅✅✅3. let Hoisting
let declarations are also processed before execution, but you cannot access them before their declaration.

console.log(x);
let x = 10;
// Result:ReferenceError

This happens because x is in the Temporal Dead Zone (TDZ) from the beginning of its scope until the declaration is reached.




✅✅✅4. const Hoisting
const behaves similarly to let.

console.log(x);
const x = 10;
// Result:ReferenceError

const is also subject to the Temporal Dead Zone.



✅✅✅5. Temporal Dead Zone (TDZ)
The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is initialized.

Example:
console.log(name); // ❌ ReferenceError
let name = "Raju";



➡️Think:
Scope starts
     ↓
┌─────────────────────┐
│ Temporal Dead Zone  │
│                     │
│ name cannot be used │
└─────────────────────┘
     ↓
let name = "Raju"
     ↓
name can be used




✅✅✅12. var vs let vs const Hoisting

| Declaration          | Hoisted? | Initial value during hoisting | Can access before declaration? |
| -------------------- | -------- | ----------------------------- | ------------------------------ |
| `var`                | ✅        | `undefined`                   | ✅, gives `undefined`           |
| `let`                | ✅        | Uninitialized                 | ❌ TDZ → `ReferenceError`       |
| `const`              | ✅        | Uninitialized                 | ❌ TDZ → `ReferenceError`       |
| Function declaration | ✅        | Function itself               | ✅                              |




✅✅✅13. Function Expression Hoisting
This is particularly important because you recently studied function expressions.

➡️With var
sayHello();
var sayHello = function () {
    console.log("Hello");
};
// Result:TypeError: sayHello is not a function

⚠️Why?
Conceptually:
var sayHello; // undefined
sayHello();  // ❌ undefined is not a function
sayHello = function () {
    console.log("Hello");
};
The variable declaration is hoisted, but the function assignment is not.



➡️With let
sayHello();
let sayHello = function () {
    console.log("Hello");
};
// Result:ReferenceError
Because sayHello is in the TDZ.


➡️With const
sayHello();
const sayHello = function () {
    console.log("Hello");
};
// Result:ReferenceError





✅✅✅14. Function Declaration vs Function Expression

➡️Function Declaration

greet();
function greet() {
    console.log("Hello");
}

📌Works because the function declaration is hoisted.



➡️Function Expression
greet();
const greet = function () {
    console.log("Hello");
};

📌Doesn't work because greet is in the TDZ.





✅✅✅15. Arrow Function Hoisting
Arrow functions are usually assigned to variables, so they behave like function expressions.

➡️
greet();
const greet = () => {
    console.log("Hello");
};
// Result : ReferenceError


➡️With var:
greet();
var greet = () => {
    console.log("Hello");
};
// Result: TypeError


📌Again:
var → variable becomes undefined
let/const → TDZ




✅✅✅16. Scope + Hoisting Together


➡️Consider:
function test() {
    console.log(a);
    console.log(b);

    var a = 10;
    let b = 20;
}
test();



➡️What happens?
The var behaves roughly like:
function test() {
    var a; // hoisted
    console.log(a); // undefined
    console.log(b); // ❌ ReferenceError
    a = 10;
    let b = 20;
}
So the program stops at b.





*/