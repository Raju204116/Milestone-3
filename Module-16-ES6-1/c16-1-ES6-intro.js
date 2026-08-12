
/* ✅ ❌ ⚠️

✅What is ES6
ES6 stands for ECMAScript 2015. It is a major version of the JavaScript language released in 2015.

Before ES6, JavaScript had many older syntax patterns. ES6 introduced a large number of features that made JavaScript
more modern, cleaner, and easier to write.


✅ES6 (ECMAScript 2015) key features

| #  | ES6 Feature                   | What it does                               | Example                           |
| -- | ----------------------------- | ------------------------------------------ | --------------------------------- |
| 1  | **`let`**                     | Declares a block-scoped variable           | `let age = 25;`                   |
| 2  | **`const`**                   | Declares a block-scoped constant           | `const name = "Raju";`            |
| 3  | **Arrow Functions**           | Shorter function syntax                    | `const add = (a,b) => a+b;`       |
| 3  | **Arrow Methods**             | Shorter methods                            | map(), filter(), find(), reduce(),sort() |
| 4  | **Template Literals**         | Makes string interpolation easier          | `` `Hello ${name}` ``             |
| 5  | **Default Parameters**        | Provides default values for parameters     | `function greet(name="Guest") {}` |
| 6  | **Destructuring**             | Extracts values from arrays/objects        | `const {name, age} = user;`       |
| 7  | **Spread Operator**           | Expands/copies array or object values      | `const copy = [...arr];`          |
| 8  | **Rest Parameters**           | Collects multiple arguments into an array  | `function sum(...nums) {}`        |
| 9  | **`for...of` Loop**           | Iterates over iterable values              | `for (let item of arr) {}`        |
| 10 | **Object Property Shorthand** | Shorter object property syntax             | `{ name, age }`                   |
| 11 | **Computed Property Names**   | Creates dynamic object keys                | `{ [key]: value }`                |

| 12 | **Classes**                   | Provides cleaner OOP syntax                | `class Student {}`                |
| 13 | **Modules**                   | Allows code sharing between files          | `export` / `import`               |
| 14 | **Promises**                  | Handles asynchronous operations            | `new Promise(...)`                |
| 15 | **Map**                       | Stores key-value pairs                     | `map.set("name", "Raju")`         |
| 16 | **Set**                       | Stores unique values                       | `new Set([1,2,2,3])`              |
| 17 | **Symbol**                    | Creates unique identifiers                 | `const id = Symbol("id");`        |
| 18 | **Enhanced Object Literals**  | Adds shorthand and dynamic object features | `{ name, [key]: value }`          |




✅A useful way to remember ES6
Think of ES6 as introducing several major improvements:

ES6
│
├── Variables
│   ├── let
│   └── const
│
├── Functions
│   ├── Arrow functions
│   └── Default parameters
│
├── Strings
│   └── Template literals
│
├── Objects / Arrays
│   ├── Destructuring
│   ├── Spread
│   ├── Rest
│   └── Property shorthand
│
├── Loops
│   └── for...of
│
├── OOP
│   └── Classes
│
├── Modules
│   ├── export
│   └── import
│
├── Async
│   └── Promises
│
└── Data Structures
    ├── Map
    └── Set





✅✅var vs let vs const


| Feature                        | `var`               | `let`               | `const`            |
| ------------------------------ | ------------------- | -----------------   | -----------------  |
| Introduced                     | Before ES6          | ES6                 | ES6                |
| Scope                          | **Function scoped** | **Block scoped**    | **Block scoped**   |
| Can reassign?                  | ✅ Yes              | ✅ Yes             | ❌ No              |
| Can redeclare in same scope?   | ✅ Yes              | ❌ No              | ❌ No              |
| Must initialize when declared? | ❌ No               | ❌ No              | ✅ Yes             |
| Hoisted? Initialized ?         | ✅ Yes,Yes          | ✅ Yes*, No        | ✅ Yes*,No         |
| Access before declaration      | `undefined`          | ❌ ReferenceError* | ❌ ReferenceError* |
| Recommended today              | ⚠️ Usually avoid    | ✅ Yes             | ✅ Yes             |

⚠️⚠️*  let and const are hoisted, but they remain in the Temporal Dead Zone (TDZ) until their declaration is reached.




⭐⭐//Details ⭐⭐

✅✅1. Scope — the biggest difference

👍var → function scope
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
test();

//Output:10
Even though x was declared inside the if block, var does not respect block scope.

👍let → block scope
function test() {
    if (true) {
        let x = 10;
    }
    console.log(x);
}

//Output:ReferenceError
Because x exists only inside the { } block.

👍The same applies to const.

if (true) {
    const x = 10;
}
console.log(x); // ReferenceError



✅✅2. Reassignment

👍var (Works.)
var age = 20;
age = 25;
console.log(age);//25
👍let (Works)
let age = 20;
age = 25;
console.log(age); //25

👍const (not works)
const age = 20;
age = 25;
console.log(age); //TypeError: Assignment to constant variable.

⚠️So:
var   → can change
let   → can change
const → cannot be reassigned



✅✅3. Redeclaration
This is an important difference.

👍var (Allowed.)
var name = "Raju";
var name = "Karim";
console.log(name); //Karim

👍let (Not Allowed)
let name = "Raju";
let name = "Karim";
console.log(name); //SyntaxError: Identifier 'name' has already been declared


👍const (Not Allowed)
const name = "Raju";
const name = "Karim";
console.log(name); //SyntaxError: Identifier 'name' has already been declared

📌This makes let and const safer.




✅✅4. Hoisting
This is where things become interesting.

👍var
console.log(x);
var x = 10;
// Output:undefined

💡Conceptually, JavaScript behaves somewhat like:
var x;
console.log(x);
x = 10;


👍let

console.log(x);
let x = 10;
// Output :  ReferenceError: Cannot access 'x' before initialization

👍const
console.log(x);
const x = 10;
// Output : ReferenceError: Cannot access 'x' before initialization

📌This happens because let and const are in the Temporal Dead Zone (TDZ) before their declaration is executed.





✅✅5. const doesn't mean the value is completely immutable
This is a very important point.

⚠️You cannot reassign a const variable:

const user = {
    name: "Raju"
};
user = {}; // ❌


✅But you can modify the object's properties:

const user = {
    name: "Raju"
};
user.name = "Karim";
console.log(user.name);

// Output:Karim



💡Why?
Because the variable still refers to the same object.

Similarly:
const numbers = [1, 2, 3];
numbers.push(4); // ✅
console.log(numbers);

// Output:[1, 2, 3, 4]

But:
numbers = [5, 6, 7]; // ❌
is not allowed.

*/