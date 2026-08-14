/* 
✅✅✅Pass by Value vs Pass by Reference in JavaScript
This topic is closely related to primitive and non-primitive data types.

The key idea is:
Pass by value → a copy of the value is passed.
Objects → JavaScript passes a copy of the reference value.

📌A common shortcut is to say "objects are passed by reference," but technically JavaScript is pass-by-value; 
the value passed for an object is a reference to that object.


✅✅Quick Comparison

|                       | Primitive                     | Object / Array          |
| --------------------- | ----------------------------- | ----------------------- |
| Example               | `number`, `string`, `boolean` | Object, Array           |
| Function receives     | Copy of value                 | Copy of reference value |
| Changing parameter    | Original unaffected           | Object can be modified  |
| Reassigning parameter | Original unaffected           | Original unaffected     |
| Example               | `x = 100`                     | `obj.name = "X"`        |



✅✅✅1. Pass by Value
When a primitive value is passed to a function, the function receives a copy of that value.

function changeValue(x) {
    x = 100;
}
let num = 10;
console.log(changeValue(num));//100
console.log(num);//10


Why?
➡️Before function:
num=10


➡️Function call:
num ──copy──> x
               ↓
              10

then,x = 100


but still:
num=10
x=100
x and num contain separate values.
So changing x doesn't change num.



✅2. Primitive Example

let name = "Rafi";
function changeName(value) {
    value = "Karim";
}
changeName(name);
console.log(name);
// Output:Rafi

Because value received a copy of "Rafi".



✅✅✅3. Pass by Reference — Object Behavior

const user = {
    name: "Rafi",
    age: 20
};

function changeUser(person) {
    person.name = "Karim";
}
changeUser(user);
console.log(user.name);
// Output:Karim


➡️Why did the original object change?
Because person receives a copy of the reference to the same object.


Think of it like:
                ┌─────────────────────┐
user ──────────►│                     │
                │ name: "Rafi"        │
person ────────►│ age: 20             │
                │                     │
                └─────────────────────┘
Both user and person point to the same object.


➡️Therefore:
person.name = "Karim";
changes the same object that user refers to.



✅✅4. Important: JavaScript Is Technically Pass-by-Value
This is a subtle but important point.


➡️People commonly say:
"Primitive = pass by value, Object = pass by reference."
That's useful for beginners, but technically:
JavaScript always passes arguments by value.
For an object, the value being copied is a reference to the object.


➡️Think:
Object
   ↑
   │
Reference value
   │
   ├──── user
   │
   └──── person


➡️When you call:
changeUser(user);
the reference value is copied:
user reference ──copy──> person reference
Both references point to the same object.



✅✅5. Changing an Object's Property
This changes the original object:

function changeUser(user) {
    user.name = "Karim";
}
const person = {
    name: "Rafi"
};
changeUser(person);
console.log(person.name);
// Output:Karim

Because we modified the object.



✅✅6. Reassigning the Parameter
Now look at this:

function changeUser(user) {
    user = {
        name: "Karim"
    };
}
const person = {
    name: "Rafi"
};
changeUser(person);
console.log(person.name);
// Output:Rafi


➡️This is very important.
Inside the function:
user = {
    name: "Karim"
};
we didn't modify the original object.
We simply made the local parameter user point to a new object.


Think:
➡️Before:
person ─────────► { name: "Rafi" }
                  ↑
user ────────────┘


➡️After user = new object:
person ─────────► { name: "Rafi" }
user ───────────► { name: "Karim" }

The original person still points to the old object.




✅✅7. Array Example
Arrays behave the same way because arrays are objects.

function addItem(arr) {
    arr.push(40);
}
let numbers = [10, 20, 30];
addItem(numbers);
console.log(numbers);
// Output:[10, 20, 30, 40]


➡️Because arr and numbers refer to the same array.
numbers ──────┐
              ↓
        [10, 20, 30]
              ↑
arr ──────────┘




✅✅8. Reassigning an Array

But:
function changeArray(arr) {
    arr = [100, 200];
}
let numbers = [10, 20, 30];
changeArray(numbers);
console.log(numbers);
// Output:[10, 20, 30]

Again, the parameter was simply reassigned.





✅✅9.  Spread Operator Connection

const newUser = {
    ...user
};
This creates a new object.

➡️Example:
const user = {
    name: "Rafi",
    points: 20
};
const newUser = {
    ...user
};
newUser.points = 25;
console.log(user.points);    // 20
console.log(newUser.points); // 25


➡️Now:
user ───────► { name: "Rafi", points: 20 }
newUser ────► { name: "Rafi", points: 25 }

They are separate objects.
That's why you used this pattern in your previous task:
return users.map((item) => {
    return {
        ...item,
        points: item.points + bonus
    };
});
You're creating a new object instead of modifying the original one.




✅✅10. Nested Objects: Shallow Copy
Be careful, though.
Spread only creates a shallow copy.

const user = {
    name: "Rafi",
    address: {
        city: "Dhaka"
    }
};
const newUser = {
    ...user
};
newUser.address.city = "Chittagong";
console.log(user.address.city);
// Output:Chittagong


➡️Why?
The outer objects are different, but their nested address object is still shared.
user ────────► { name, address ─────► { city } }
                                      ↑
newUser ─────► { name, address ───────┘


*/