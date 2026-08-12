/* 

✅✅✅1. Spread Operator
Spread takes the elements/properties from an array or object and spreads them out.

👍Array example
const arr = [10, 20, 30];
const newArr = [...arr];
console.log(newArr);
// Output:[10, 20, 30]

Think of: [...arr]   as:[10, 20, 30]
The elements of arr are being expanded into the new array.




👍Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
// Output:[1, 2, 3, 4, 5, 6]



👍Spread with objects
const user = {
    name: "Raju",
    age: 25
};

const newUser = {
    ...user
};
console.log(newUser);
// Output:{name: "Raju", age: 25}




👍Copy and modify an object
const user = {
    name: "Rafi",
    points: 20
};

const newUser = {
    ...user,
    points: user.points + 5
};
console.log(newUser);
// Output:{name: "Rafi",points: 25}



📌📌The original remains same:
{
    name: "Rafi",
    points: 20
}







✅✅✅2. Rest Operator
Rest does the opposite.It takes multiple values and collects them into an array.


👍The most common use is in function parameters.
function add(...numbers) {
    console.log(numbers);
}
add(10, 20, 30, 40);
// Output:[10, 20, 30, 40]

So:  ...numbers   means: Collect all remaining arguments into the numbers array.

👍You can then use:
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(add(10, 20, 30));
// Output: 60


✅✅✅3. Rest with destructuring
Rest can also be used with array destructuring.


const numbers = [10, 20, 30, 40];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);

// Output:
10
[20, 30, 40]

// Here:
const [first, ...rest] = numbers;
means:
first → 10
rest  → [20, 30, 40]







✅✅✅4. Spread vs Rest

|                   | Spread                                | Rest                               |
| ----------------- | ------------------------------------- | ---------------------------------- |
| Symbol            | `...`                                 | `...`                              |
| Meaning           | **Expand / unpack**                   | **Collect / pack**                 |
| Usually used with | Arrays, objects, function calls       | Function parameters, destructuring |
| Result            | Multiple individual values/properties | A single array                     |
| Example           | `[...arr]`                            | `(...numbers)`                     |
| Trick             |  One → Many                           | Many → One                    |

⭐One-line rule⭐
Spread expands; Rest collects.



Compare these two:

👍Spread:It expands the array.

const numbers = [10, 20, 30];
console.log(...numbers);

Conceptually:
console.log(10, 20, 30);


👍Rest:It collects the values.

function test(...numbers) {
    console.log(numbers);
}
test(10, 20, 30);

Conceptually:
10, 20, 30
     ↓
[10, 20, 30]




✅✅5. Very important: context determines whether it's Spread or Rest

⚠️Don't think: "... always means spread."
Instead, look at where it is being used.

In an array:
const newArr = [...arr]; ➡️ Spread


In an object:
const newUser = {...user};➡️ Spread


In function parameters:
function test(...args) {} ➡️ Rest


In destructuring:
const [first, ...rest] = arr; ➡️ Rest



📌Easy memory trick 🧠

Think:
👍SPREAD : One → Many

const arr = [1, 2, 3];
[...arr]

becomes:1, 2, 3


👍REST : Many → One
function test(...args) {}

collects:
1, 2, 3
    ↓
[1, 2, 3]







*/