/* 
✅✅✅Default Parameters in JavaScript
Default parameters allow you to give a function parameter a default value if the caller doesn't provide a value
(or provides undefined).

This is an ES6 feature.



✅✅1. Basic example

👍Without a default parameter:
function greet(name) {
    console.log(`Hello ${name}`);
}
greet();
// Output:Hello undefined


👍With a default parameter:
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet();
// Output:Hello Guest


📌If you provide a value:
greet("Raju");
// Output:Hello Raju

So:function greet(name = "Guest")
means:If name is not provided, use "Guest".



✅✅2. Default value is used when argument is undefined

function greet(name = "Guest") {
    console.log(name);
}
greet();          // Guest
greet(undefined); // Guest
greet("Raju");    // Raju

⚠️But null is different:
greet(null);
// Output:null

📌Because null is an actual value.



✅✅3. Multiple default parameters

function calculatePrice(price = 100, tax = 10) {
    return price + tax;
}
console.log(calculatePrice());
// Output:110

💡You can also provide only the first parameter:
console.log(calculatePrice(200));
// Output:210

Here:
price = 200
tax   = 10 (default)



✅✅4. Default parameters can use expressions

function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));
// Output:10


💡You can even use another parameter:
function calculateTotal(price, tax = price * 0.1) {
    return price + tax;
}
console.log(calculateTotal(100));
// Output:110





✅✅5. Default parameter vs ||  (⭐Before ES6) 

👍Before default parameters, you might see:
function greet(name) {
    name = name || "Guest";
    return `Hello ${name}`;
}
⚠️But this has a problem.
greet("");
Because "" is falsy, it uses "Guest".
// Output:Guest


👍With a default parameter:
function greet(name = "Guest") {
    return `Hello ${name}`;
}
An empty string remains an empty string.
greet("");
// Output:Hello

Because default parameters are used specifically when the value is undefined.



✅✅6. Very common use with arrow functions

You can use them with arrow functions too:
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};
console.log(greet());
console.log(greet("Raju"));

Output:
Hello Guest
Hello Raju



✅✅Quick summary

| Code               | Result        |
| ------------------ | ------------- |
| `greet()`          | Uses default  |
| `greet(undefined)` | Uses default  |
| `greet("Raju")`    | Uses `"Raju"` |
| `greet(null)`      | Uses `null`   |
| `greet("")`        | Uses `""`     |
| `greet(0)`         | Uses `0`      |



📌Remember
Default parameter = fallback value for undefined.

*/