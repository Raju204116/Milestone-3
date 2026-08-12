/* 
✅✅✅Object Methods in JavaScript
JavaScript provides several built-in Object methods that help us inspect, copy, transform, and work with objects.

Example object:
const student = {
    name: "Rafi",
    age: 20,
    course: "JavaScript"
};

➡️Most Important Object Methods

| Method                     | Purpose                      | Returns | ES Version |
| -------------------------- | ---------------------------- | ------- | ---------- |
| **`Object.keys()`**        | Get keys                     | Array   | ES5        |
| **`Object.values()`**      | Get values                   | Array   | ES2017     |
| **`Object.entries()`**     | Get key-value pairs          | Array   | ES2017     |
| **`Object.hasOwn()`**      | Check own property           | Boolean | ES2022     |
| **`Object.assign()`**      | Copy/merge objects           | Object  | ES6        |
| **`Object.is()`**          | Compare two values           | Boolean | ES6        |
| **`Object.fromEntries()`** | Entries → Object             | Object  | ES2019     |
| `Object.create()`          | Create object with prototype | Object  | ES5        |
| `Object.freeze()`          | Prevent modifications        | Object  | ES5        |
| `Object.seal()`            | Prevent add/delete           | Object  | ES5        |



✅✅1. Object.keys()
Returns an array containing the object's property names (keys).

Returns: Array
Mutates: ❌

Syntax
Object.keys(objectName)

const keys = Object.keys(student);
console.log(keys);
// Output:["name", "age", "course"]





✅✅2. Object.values()
Returns an array containing the object's property values.

Returns: Array
Mutates: ❌

const values = Object.values(student);
console.log(values);
// Output:["Rafi", 20, "JavaScript"]



✅✅3. Object.entries()
Returns an array containing key-value pairs.

Returns: Array of arrays
Mutates: ❌


const entries = Object.entries(student);
console.log(entries);
// Output:
[
    ["name", "Rafi"],
    ["age", 20],
    ["course", "JavaScript"]
]

Each pair is:["name", "Rafi"]

➡️So you can use destructuring:
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}


✅✅4. Object.hasOwn()
Checks whether an object has a specific own property.

Returns: true / false
Mutates: ❌

const student = {
    name: "Rafi",
    age: 20
};
console.log(Object.hasOwn(student, "name"));   // true
console.log(Object.hasOwn(student, "course")); // false

➡️Why is this useful?
if (!Object.hasOwn(student, "name")) {
    return "Invalid";
}
This checks whether the name property actually exists on the object.

⚠️Object.hasOwn() is a relatively modern method (ES2022), not an ES6 method.




✅✅5. Object.assign()
Copies properties from one or more objects into another object.

Introduced: ES6
Mutates: The target object.

📌The first argument is the target object:
Object.assign(target, source)

const user = {
    name: "Raju",
    age: 25
};
const copy = Object.assign({}, user);
console.log(copy);
// Output:
{
    name: "Raju",
    age: 25
}

➡️Combining objects
const personal = {
    name: "Raju"
};

const professional = {
    job: "Developer"
};
const user = Object.assign({}, personal, professional);
console.log(user);
// Output:
{
    name: "Raju",
    job: "Developer"
}



✅✅6. Object.create()
Creates a new object using another object as its prototype.

const person = {
    greet() {
        return "Hello";
    }
};
const student = Object.create(person);
console.log(student.greet());
// Output:Hello



✅✅7. Object.freeze()
Prevents an object from being modified.

const user = {
    name: "Raju",
    age: 25
};
Object.freeze(user);
user.age = 30;
console.log(user.age);

⚠️In strict mode, attempting to modify it throws an error.
The object cannot normally be:
modified
added to
deleted from

📌Mutates: It changes the object's mutability state.




✅✅8. Object.seal()
Prevents adding or deleting properties, but existing properties can still be modified.

const user = {
    name: "Raju",
    age: 25
};
Object.seal(user);

user.age = 30;       // ✅
user.city = "Dhaka"; // ❌
delete user.age;     // ❌

➡️Difference:

|         Features           | `freeze()` | `seal()` |
| -------------------------- | ---------- | -------- |
| Modify existing properties | ❌          | ✅        |
| Add properties             | ❌          | ❌        |
| Delete properties          | ❌          | ❌        |




✅✅9. Object.is()
Checks whether two values are the same using a comparison algorithm slightly different from ===.

console.log(Object.is(10, 10)); // true
console.log(Object.is("a", "a")); // true

➡️One important difference:
console.log(NaN === NaN);       // false
console.log(Object.is(NaN, NaN)); // true

➡️Another:
console.log(0 === -0);           // true
console.log(Object.is(0, -0));   // false



✅✅10. Object.fromEntries()
Converts an array of key-value pairs into an object.

const entries = [
    ["name", "Raju"],
    ["age", 25]
];
const user = Object.fromEntries(entries);
console.log(user);
// Output:
{
    name: "Raju",
    age: 25
}

➡️This is essentially the reverse of:
Object.entries()
Object.entries()
Object → Array

📌Object.fromEntries()
Array → Object



✅✅11. Object.getOwnPropertyNames()
Returns an array containing the object's own property names, including non-enumerable properties.

const user = {
    name: "Raju",
    age: 25
};
console.log(Object.getOwnPropertyNames(user));
// Output:["name", "age"]



✅✅12. Object.getPrototypeOf()
Returns the prototype of an object.

const user = {
    name: "Raju"
};
console.log(Object.getPrototypeOf(user));

📌This is mainly useful when learning prototypes and inheritance.





*/