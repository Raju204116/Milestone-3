/* 

✅✅✅Closure in JavaScript

A closure is a function that remembers and can access variables from its outer lexical scope 
even after the outer function has finished executing.

In simple words:
Closure = Function + its remembered outer environment


✅✅Common Use Cases of Closures

| Use case           | Example                      |
| ------------------ | ---------------------------- |
| Data privacy       | Private variables            |
| Counters           | `createCounter()`            |
| ID generators      | `createIdGenerator()`        |
| Function factories | `greeting("Rafi")`           |
| Event handlers     | DOM callbacks                |
| Async callbacks    | `setTimeout()`               |
| Maintaining state  | Keeping values between calls |
| Memoization        | Caching calculated results   |





✅✅1. Basic Example

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }
    return inner;
}
const myFunction = outer();
myFunction();
// Output:Hello



➡️What happened?

👍First:
const myFunction = outer();
outer() executes.

Normally, you might think message disappears after outer() finishes.
But inner() remembers message.

outer()
  │
  ├── message = "Hello"
  │
  └── inner()
         │
         └── remembers message

👍Then:
myFunction();
calls inner(), and it can still access:
message

That's a closure.





✅✅2. Why Does Closure Work?

➡️Consider:
function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    };
}

When outer() returns inner, the returned function keeps a reference to the variables it needs 
from its surrounding lexical environment.


➡️Think of it like:
┌──────────────────────────────┐
│ outer()                      │
│                              │
│ x = 10                       │
│                              │
│ ┌──────────────────────────┐ │
│ │ inner()                  │ │
│ │                          │ │
│ │ remembers x              │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
             │
             │ return
             ↓
       inner function
       still remembers x


       

✅✅3. Closure with a Counter


➡️This is one of the most important examples.
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

➡️Why does count remember its value?

After:
const counter = createCounter();
the createCounter() function has finished.

But the returned function still has access to:
count

So:
First call
count = 0 → 1

Second call
count = 1 → 2

Third call
count = 2 → 3

That persistent access is the closure.



✅✅4. Closure Provides Data Privacy
Closures can be used to create private variables.

function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}
const account = createBankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000


➡️But:
console.log(account.balance);
gives: undefined

Because balance is not directly accessible.
Only the returned functions can access it.

┌──────────────────────────────┐
│ createBankAccount            │
│                              │
│ balance = 1000 🔒            │
│                              │
│ deposit() ────────┐          │
│ getBalance() ─────┤ accesses │
└────────────────────┼─────────┘
                     ↓
                 balance

This is one reason closures are useful.





✅✅5. Closure with Parameters

➡️The outer function can also receive parameters.
function greeting(name) {
    return function () {
        console.log(`Hello ${name}`);
    };
}
const greetRafi = greeting("Rafi");
const greetKarim = greeting("Karim");
greetRafi();  // Hello Rafi
greetKarim(); // Hello Karim


➡️Each returned function remembers its own name.
greeting("Rafi")
      ↓
name = "Rafi"
      ↓
greetRafi remembers "Rafi"


greeting("Karim")
      ↓
name = "Karim"
      ↓
greetKarim remembers "Karim"



✅✅6. Multiple Closures

➡️This is important.
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2



➡️Why doesn't counter2() start at 3?
Because each call to createCounter() creates a new lexical environment.

counter1
   ↓
count = 0 → 1 → 2

counter2
   ↓
count = 0 → 1 → 2

They have separate closures.




✅✅7. Closure and setTimeout
Closures are commonly seen in asynchronous JavaScript.

function greetLater(name) {
    setTimeout(function () {
        console.log(`Hello ${name}`);
    }, 1000);
}
greetLater("Rafi");


Even after greetLater() finishes, the callback still remembers:
name

So after one second:
Hello Rafi


✅✅8. Closure in a Loop

A classic example:
With let
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output:
1
2
3

Because let creates a separate binding for each iteration.
Closures allow each callback to remember its corresponding i.


✅✅9. What Exactly Makes a Closure?

You need two things:

➡️① An inner function
function inner() {
    console.log(x);
}
It accesses a variable from an outer scope
let x = 10;


➡️Together:
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

inner forms a closure over x.



✅✅10. Closure vs Normal Function
Not every function is necessarily an example you need to call a closure.

➡️Normal function:
function add(a, b) {
    return a + b;
}
It doesn't depend on a variable from an enclosing function.



➡️Closure:
function outer() {
    let x = 10;

    return function inner() {
        return x;
    };
}

Here inner() accesses x from the outer scope.




✅✅11. Important Terminology: Lexical Scope
Closure is closely related to lexical scope.

JavaScript determines variable accessibility based on where the function is written, not where it is called.

Example:
let x = "global";
function outer() {
    let x = "outer";

    function inner() {
        console.log(x);
    }
    return inner;
}
const fn = outer();
fn();
// Output:outer

Even though fn() is called outside outer(), inner() remembers the environment where it was created.



*/