/* 

✅✅✅Template Literals in JavaScript

Template literals are a way to create strings using backticks ` ` instead of single ' ' or double " " quotes.
They are an ES6 feature.

✅✅1. Basic syntax

👍Traditional string:
const name = "Raju";
console.log("My name is " + name);

👍With a template literal:
const name = "Raju";
console.log(`My name is ${name}`);
// Output:My name is Raju


📌The important syntax is:
`Hello ${value}`

⭐⭐The ${...} part is called interpolation.⭐⭐






✅✅2. Why are they useful?

👍Before template literals, combining multiple values could become messy:

const name = "Raju";
const age = 25;
const course = "JavaScript";

console.log(
    "My name is " + name +
    ". I am " + age +
    " years old. I am learning " + course + "."
);


👍With template literals:
console.log(
    `My name is ${name}. I am ${age} years old. I am learning ${course}.`
);






✅✅3. You can put expressions inside ${}

const a = 10;
const b = 20;
console.log(`Total: ${a + b}`);
// Output:Total: 30


👍You can also use functions:
const name = "raju";
console.log(`Name: ${name.toUpperCase()}`);
// Output:Name: RAJU

👍You can even use conditions:
const age = 20;
console.log(`Status: ${age >= 18 ? "Adult" : "Minor"}`);
// OutputStatus: Adult




✅✅4. Multiline strings

👍Before template literals:
const message = "Hello Raju.\n" +
                "Welcome to JavaScript.\n" +
                "Keep learning!";



👍With template literals:
const message = `Hello Raju.
Welcome to JavaScript.
Keep learning!`;
console.log(message);

// Output:
Hello Raju.
Welcome to JavaScript.
Keep learning!

⚠️You don't need \n.



✅✅5. Very useful with objects

function studentIntroduction(student) {
    return `My name is ${student.name}. I am ${student.age} years old.`;
}
const student = {
    name: "Rafi",
    age: 18
};
// Output:My name is Rafi. I am 18 years old.



👍You can also use destructuring:
function studentIntroduction({ name, age }) {
    return `My name is ${name}. I am ${age} years old.`;
}




✅✅6. Backticks vs quotes

"Hello"
'Hello'
`Hello`
All this three can create strings.


📌📌But interpolation works with template literals:
const name = "Raju";
`Hello ${name}`   // ✅
"Hello ${name}"   // ❌
'Hello ${name}'   // ❌

The last two literally produce: Hello ${name}




✅✅Quick comparison

| Feature                     | `' '` / `" "`  | `` ` ` `` |
| --------------------------- | ------------:  | --------: |
| Create string               |             ✅ |         ✅ |
| `${variable}` interpolation |             ❌ |         ✅ |
| Multiline string            |  Not directly  |         ✅ |
| Expressions inside `${}`    |             ❌ |         ✅ |
| ES6                         |             ❌ |         ✅ |




*/