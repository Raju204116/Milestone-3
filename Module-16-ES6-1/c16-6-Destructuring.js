
/* 
✅✅✅Destructuring in JavaScript
Destructuring is an ES6 feature that allows you to extract values from arrays or objects and store them in variables easily.

Think of it as:
"Take values out of an array/object and put them into variables."

📌There are two main types:
Array destructuring
Object destructuring


✅✅✅1. Array Destructuring⭐

Suppose you have:
const numbers = [10, 20, 30];

➡️Without destructuring:
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

➡️With destructuring:
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

⚠️The position matters.
numbers
   ↓
[10,    20,    30]
 ↓       ↓      ↓
first second  third





✅✅1a. Skip Values
You can skip elements using commas:

const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first); // 10
console.log(third); // 30

Here:
[first,   ,third]
        ↑
     skipped



✅✅1b. Rest with Destructuring
You can combine destructuring with the rest operator:

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = numbers;
console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]


Here:
first     → 10
second    → 20
remaining → [30, 40, 50]

Notice that ...remaining is Rest, because it collects the remaining values.

✅✅1c. Default Values

You can also provide default values.

const numbers = [10];
const [a, b = 20] = numbers;
console.log(a); // 10
console.log(b); // 20

Since there is no second value, JavaScript uses 20.





✅✅✅2. Object Destructuring ⭐

Now let's look at objects.

const student = {
    name: "Rafi",
    age: 20,
    course: "JavaScript"
};

➡️Without destructuring:
const name = student.name;
const age = student.age;
const course = student.course;


➡️With destructuring:
const { name, age, course } = student;
console.log(name);   // Rafi
console.log(age);    // 20
console.log(course); // JavaScript


📌Here the property names matter, not the position.

student
   ↓
{
  name: "Rafi",
  age: 20,
  course: "JavaScript"
}

{name, age, course}
 ↓     ↓      ↓
Rafi   20   JavaScript



✅✅2a. Rename Variables

Suppose you don't want the variable to be called name.
⭐You can rename it:
const student = {
    name: "Rafi",
    age: 20
};
const { name: studentName, age: studentAge } = student;
console.log(studentName); // Rafi
console.log(studentAge);  // 20


📌The syntax:
const { name: studentName } = student;
means:
Take the name property and store its value in a variable called studentName.





✅✅2b. Default Values in Objects

const student = {
    name: "Rafi"
};
const { name, age = 18 } = student;
console.log(name); // Rafi
console.log(age);  // 18

📌Since age doesn't exist, the default value 18 is used.



✅✅2c. Rest with Object Destructuring

You can collect the remaining properties.

const student = {
    name: "Rafi",
    age: 20,
    course: "JavaScript"
};
const { name, ...otherInfo } = student;
console.log(name);
console.log(otherInfo);

// Output:
Rafi
{
    age: 20,
    course: "JavaScript"
}


📌Here:
...otherInfo
is Rest.


✅✅2d. Destructuring Function Parameters

Suppose:

const student = {
    name: "Rafi",
    age: 20,
    course: "JavaScript"
};

➡️Instead of:
function introduce(student) {
    return `My name is ${student.name}. I am ${student.age}.`;
}

➡️You can destructure directly in the parameter:
function introduce({ name, age }) {
    return `My name is ${name}. I am ${age}.`;
}
console.log(introduce(student));
// Output: My name is Rafi. I am 20.


This is extremely common in modern JavaScript and React.






✅✅ Destructuring vs Spread

➡️Destructuring : Takes values out:
const user = {
    name: "Raju",
    age: 25
};
const { name, age } = user;

// Result:
name → "Raju"
age  → 25


➡️Spread : Copies/expands values:
const newUser = {
    ...user
};

// Result:
{
    name: "Raju",
    age: 25
}


So:

| Feature           | Purpose                  |
| ----------------- | ------------------------ |
| **Destructuring** | Extract values           |
| **Spread**        | Expand/copy values       |
| **Rest**          | Collect remaining values |



✅✅✅Quick Cheat Sheet

➡️Array
const [a, b, c] = [10, 20, 30];

➡️Skip
const [a, , c] = [10, 20, 30];

➡️Array Rest
const [first, ...rest] = [10, 20, 30];

➡️Object
const { name, age } = user;

➡️Rename
const { name: userName } = user;

➡️Default
const { age = 18 } = user;

➡️Object Rest
const { name, ...others } = user;

➡️Function parameter
function greet({ name, age }) {
    console.log(name, age);
}


*/