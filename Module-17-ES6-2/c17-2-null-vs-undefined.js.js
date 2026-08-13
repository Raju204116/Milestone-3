/* 

✅✅✅null vs undefined in JavaScript
Both null and undefined represent absence of a value, but they have different meanings.


✅Quick Comparison

| Feature                         | `undefined`                  | `null`                 |
| ------------------------------- | ---------------------------- | ---------------------- |
| Meaning                         | Value not assigned / missing | Intentionally no value |
| Usually assigned automatically? | ✅ Often                      | ❌ Usually explicitly   |
| Example                         | `let x;`                     | `let x = null;`        |
| `typeof`                        | `"undefined"`                | `"object"` ⚠️          |
| `===` with each other           | `false`                      | `false`                |
| `==` with each other            | `true`                       | `true`                 |
| Treated as nullish by `??`      | ✅                            | ✅                      |






✅✅✅1. undefined  = (Accidentaly)

undefined generally means:
A value has not been assigned / does not exist yet. (Accidentaly)



➡️Example 1: Declared but not assigned
let x;
console.log(x);
// Output:undefined
The variable exists, but no value has been assigned.



➡️Example 2: Missing object property
const user = {
    name: "Rafi"
};
console.log(user.age);
// Output:undefined
The age property doesn't exist.



➡️Example 3: Function doesn't return anything
function test() {
    console.log("Hello");
}
const result = test();
console.log(result);
// Output:
Hello
undefined
📌If a function doesn't explicitly return a value, it returns undefined.




✅✅✅2. null  = (Intentionally)

null generally means:
The programmer intentionally says that there is no value.


➡️Example:
let selectedUser = null;
This means:
There is currently no selected user.

Later:
selectedUser = {
    name: "Rafi"
};
Now a user has been assigned.




✅✅3. Main Difference

Think of it like this:
undefined
     ↓
"Nothing has been assigned yet."

null
     ↓
"I intentionally set it to have no value."


➡️Example
let user1;
let user2 = null;

Here:
console.log(user1); // undefined
console.log(user2); // null

user1 → no value assigned.
user2 → explicitly assigned "no value".




✅✅4. typeof

This is an important JavaScript quirk.

➡️console.log(typeof undefined);
// Output:undefined

But:

➡️console.log(typeof null);
// Output:object


⚠️ This is a historical JavaScript bug/quirk.
null is not actually an object in the conceptual sense; however:
typeof null === "object"
is true.

📌So don't use typeof to determine whether something is null.
Use:
value === null




✅✅5. Comparison

➡️Strict equality
console.log(null === undefined);
// Output:false
They are different values.


➡️Loose equality
console.log(null == undefined);
// Output:true


📌JavaScript's loose equality considers them equal.
For modern JavaScript, generally prefer:===
instead of:==


✅✅6. null and undefined with Optional Chaining

const user = {};
console.log(user.address?.city);
Since address doesn't exist:
// output:undefined

Optional chaining prevents the error.



✅✅7. null and undefined with nullish coalescing ??

The nullish coalescing operator (??) treats both null and undefined as "no value."

➡️With null:
let username = null;
console.log(username ?? "Guest");
// Output:Guest

➡️Same with undefined:
let username;
console.log(username ?? "Guest");
// Output:Guest


⚠️But 0, false, and "" are not nullish:
console.log(0 ?? 100);       // 0
console.log(false ?? true);  // false
console.log("" ?? "Guest");  // ""




*/