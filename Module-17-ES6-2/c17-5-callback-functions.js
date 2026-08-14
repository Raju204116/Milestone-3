/* 

✅✅✅Callback Function in JavaScript
A callback function is a function that is passed as an argument to another function and is called later by that function.

Callback = A function passed to another function to be executed later.
Callback says "Give me a function, and I'll call it when I need it."


✅✅Common Places You'll See Callbacks

| Method/API           |  Callback?   | Purpose                  |
| -------------------- | ---------:   | ------------------------ |
| `map()`              |          ✅ | Transform elements       |
| `filter()`           |          ✅ | Filter elements          |
| `find()`             |          ✅ | Find element             |
| `forEach()`          |          ✅ | Execute for each element |
| `reduce()`           |          ✅ | Reduce to a value        |
| `some()`             |          ✅ | Check at least one       |
| `every()`            |          ✅ | Check all                |
| `sort()`             |          ✅ Optional | Custom sorting           |
| `setTimeout()`       |          ✅ | Execute later            |
| `addEventListener()` |          ✅ | Respond to events        |



✅✅1. Basic Example

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
greet("Rafi", sayBye);
// Output:
Hello Rafi
Goodbye!


➡️Here:
greet("Rafi", sayBye);
sayBye is passed into greet().

Inside greet():
callback();
calls sayBye().


➡️Flow
sayBye function
      ↓
passed to greet()
      ↓
callback parameter
      ↓
callback()
      ↓
sayBye() executes



✅✅2. Why Is It Called a Callback?
Because you're essentially saying:
"Here is a function. Call it back when you need it."

function process(callback) {
    // Do something...
    callback();
}
The function supplied to process() is the callback function.



✅✅3. Callback Function vs Higher-Order Function
These two concepts are closely related.

➡️Callback function
A function passed into another function:

function greet(callback) {
    callback();
}
Here callback is the callback function.


➡️Higher-order function
A function that accepts a function or returns a function.

function greet(callback) {
    callback();
}
greet() is a higher-order function because it accepts a function.



📌So:
Callback
    ↓
Function being passed

Higher-order function
    ↓
Function receiving or returning a function



✅✅4. Anonymous Callback Function
You don't always need to create a separate function.

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
greet("Rafi", function () {
    console.log("Welcome!");
});


➡️Here:
function () {
    console.log("Welcome!");
}
is an anonymous callback function.



✅✅5. Arrow Function as Callback
You can also use an arrow function.

greet("Rafi", () => {
    console.log("Welcome!");
});

Or shorter:
greet("Rafi", () => console.log("Welcome!"));



✅✅6. Callback with Parameters
The function receiving the callback can pass data to it.


function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}
calculate(10, 20, function (result) {
    console.log(result);
});
// Output:30


➡️Flow:
10 + 20
   ↓
30
   ↓
callback(30)
   ↓
result = 30



✅✅7. Callback in Array Methods

➡️map() callback
const numbers = [1, 2, 3];
const doubled = numbers.map((item) => {
    return item * 2;
});


➡️Here:
(item) => {
    return item * 2;
}
is a callback function.

map() calls it for each array element.
1 → callback → 2
2 → callback → 4
3 → callback → 6

// Result:[2, 4, 6]



✅✅8.filter() Callback

const activeUsers = users.filter((item) => {
    return item.isActive === true;
});

➡️The callback is:
(item) => {
    return item.isActive === true;
}

filter() calls the callback for every item.
User A → callback → true  → keep
User B → callback → false → remove
User C → callback → true  → keep


✅✅9.find() Callback

const result = items.find((element) => {
    return element.stock === 0;
});

➡️The callback:
(element) => element.stock === 0
is called for each element until a match is found.



✅✅10. forEach() Callback

const numbers = [10, 20, 30];
numbers.forEach((item) => {
    console.log(item);
});
// Output:
10
20
30
The function passed to forEach() is a callback.



✅✅11. Callbacks Can Be Synchronous
A callback doesn't necessarily mean asynchronous.

For example:
const numbers = [1, 2, 3];
numbers.map((number) => {
    return number * 2;
});
map() executes the callbacks immediately and synchronously.

➡️So:
Callback does NOT automatically mean asynchronous.
This is an important distinction.



✅✅12. Asynchronous Callback
Callbacks are also heavily used in asynchronous JavaScript.

Example:
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

➡️The arrow function is a callback.
JavaScript essentially says:
Wait 2 seconds
      ↓
Execute callback



✅✅13. Another Async Example

console.log("Start");
setTimeout(() => 
    console.log("Inside callback");
}, 2000);
console.log("End");
// Output:
Start
End

➡️Inside callback
The callback runs later.
This is an asynchronous callback.





✅✅14. Important: Don't Call the Function When Passing It

➡️Correct:
greet(sayBye);

➡️Wrong:
greet(sayBye());

Why?
greet(sayBye);
means:
Pass the sayBye function to greet.

While:
greet(sayBye());
means:
Execute sayBye() first and pass its return value to greet.


➡️Example:
function sayBye() {
    console.log("Bye");
}

function process(callback) {
    callback();
}
process(sayBye);   // ✅
process(sayBye()); // ❌




✅✅15. Callback with Arguments
If you need to pass your own arguments to the callback:

function process(callback) {
    const name = "Rafi";
    callback(name);
}

process((name) => {
    console.log(`Hello ${name}`);
});
// Output:Hello Rafi




*/