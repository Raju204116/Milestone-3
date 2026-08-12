/* 

✅✅✅Arrow Functions in JavaScript
Arrow functions are a shorter way to write functions. They were introduced in ES6 (ECMAScript 2015).

The basic syntax is:

const functionName = (parameters) => {
    // function body
};



✅1. Normal Function vs Arrow Function

👍 Normal function
function add(a, b) {
    return a + b;
}

👍 Arrow function
const add = (a, b) => {
    return a + b;
};

Both do the same thing:
console.log(add(10, 20)); // 30


👍Normal Function vs Arrow Function

| Feature                         | Normal Function        | Arrow Function          |
| ------------------------------- | --------------------   | ----------------------- |
| Syntax                          | `function test() {}`   | `const test = () => {}` |
| Introduced                      | Before ES6             | ES6                     |
| Shorter syntax                  | ❌                    | ✅                       |
| Own `this`                      | ✅                    | ❌                       |
| Own `arguments`                 | ✅                    | ❌                       |
| Can use `new`                   | ✅                    | ❌                       |
| Implicit return                 | ❌                    | ✅                       |
| Common with `map/filter/reduce` | ✅                    | ✅ Very common           |






✅✅2. Arrow Function with One Parameter

⚠️If there is only one parameter, parentheses are optional:
const square = (number) => {
    return number * number;
};

👍Can be shortened to:
const square = number => {
    return number * number;
};
➡️Both are valid.


⚠️However, if there are zero or multiple parameters, parentheses are required:
const greet = () => {
    return "Hello";
};
const add = (a, b) => {
    return a + b;
};



✅✅3. Implicit Return
If your function contains only one expression, you can remove {} and return.

👍Instead of:
const add = (a, b) => {
    return a + b;
};

👍You can write:
const add = (a, b) => a + b;

➡️This is called an implicit return.


Example
const double = number => number * 2;
console.log(double(5)); // 10

📌JavaScript automatically returns:
number * 2



✅✅4. Returning an Object
This is a very important arrow-function pattern


const createUser = name => ({
    name: name,
    age: 25
});

💡Why the parentheses?
Because:
const createUser = name => {
    name: name
};
⚠️would treat {} as the function body, not as an object to return.


So:
() => ({})
means:
"Immediately return this object."

Example:
products.map(item => ({
    ...item,
    expensive: item.price >= 1000
}));




✅✅5. Arrow Functions with Array Methods
This is one of the most common uses of arrow functions.


👍map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
// Output:[2, 4, 6, 8]


👍filter()
const numbers = [10, 15, 20, 25];
const result = numbers.filter(number => number >= 20);
console.log(result);
// Output:[20, 25]


👍find()
const users = [
    { name: "A", age: 17 },
    { name: "B", age: 20 }
];
const user = users.find(user => user.age >= 18);
console.log(user);
// Output:{ name: "B", age: 20 }

👍reduce()
const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);
// Output:60



✅✅6. Arrow Functions and this
This is one of the most important differences between normal functions and arrow functions.

⚠️A normal function has its own this depending on how it is called.
⚠️Arrow functions do not have their own this. They inherit this from the surrounding scope.


For example:
const person = {
    name: "Raju",

    normalFunction: function () {
        console.log(this.name);
    }
};
person.normalFunction();
// Output:Raju


⚠️But you shouldn't generally replace that method with:
const person = {
    name: "Raju",

    arrowFunction: () => {
        console.log(this.name);
    }
};

because the arrow function doesn't get this from person.
⚠️This becomes especially important later when you learn objects, classes, DOM events, and React.



✅✅7. Arrow Functions Don't Have Their Own arguments

👍Normal function:

function test() {
    console.log(arguments);
}
test(10, 20, 30);

The function has access to arguments.


👍Arrow functions don't have their own arguments object.
➡️Instead, use rest parameters:

const test = (...args) => {
    console.log(args);
};
test(10, 20, 30);

// Output:[10, 20, 30]



✅✅8. Arrow Functions Cannot Be Used as Constructors

👍You can do this with a normal function:
function Student(name) {
    this.name = name;
}
const student = new Student("Raju");


👍But:
const Student = name => {
    this.name = name;
};
const student = new Student("Raju"); // ❌


⚠️Arrow functions cannot be called with new.



✅✅9. Different Forms

You can think of arrow functions in several forms:

👍No parameters
const greet = () => "Hello";


👍One parameter
const square = x => x * x;


👍Multiple parameters
const add = (a, b) => a + b;


👍Multiple statements
const calculate = (a, b) => {
    const sum = a + b;
    return sum * 2;
};


👍Returning an object
const createUser = name => ({
    name,
    age: 25
});



👍👍The most important patterns to remember
// Normal
function add(a, b) {
    return a + b;
}

// Arrow
const add = (a, b) => {
    return a + b;
};

// Implicit return
const add = (a, b) => a + b;

// One parameter
const square = x => x * x;

// Return object
const user = name => ({ name });





*/
