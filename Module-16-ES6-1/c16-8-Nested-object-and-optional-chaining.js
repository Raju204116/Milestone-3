/* 

✅✅✅1. Nested Object
A nested object is an object that contains another object as a property.

Example
const student = {
    name: "Rafi",
    age: 20,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

➡️Here, address is an object inside the student object.
student
│
├── name
├── age
└── address
    ├── city
    └── country



✅✅1a. Accessing Nested Object Properties

➡️Use the dot (.) operator:
console.log(student.name);// Rafi
console.log(student.address.city);// Dhaka
console.log(student.address.country);// Bangladesh

➡️You can also use bracket notation:
console.log(student["address"]["city"]);// Dhaka




✅✅1b. Multiple Levels of Nesting
Objects can be nested multiple levels deep.

const company = {
    name: "ABC",
    employee: {
        name: "Rafi",
        job: {
            title: "Developer",
            department: {
                name: "Software",
                floor: 5
            }
        }
    }
};

➡️Accessing the department:
console.log(company.employee.job.department.name);
// Output:Software



✅✅1c. Nested Object Destructuring
You can also destructure nested objects.

const student = {
    name: "Rafi",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
const {
    address: { city, country }
} = student;
console.log(city);    // Dhaka
console.log(country); // Bangladesh


➡️This: const { address: { city } } = student;
means: Go inside address and extract city.


✅✅1d. The Problem with Nested Objects

Suppose:
const student = {
    name: "Rafi"
};

⚠️Now try: console.log(student.address.city);
You'll get: TypeError: Cannot read properties of undefined


➡️Why?
Because:student.address is : undefined

JavaScript then tries: undefined.city
which causes the error.







✅✅✅2. Optional Chaining (?.)
Optional chaining (?.) allows you to safely access properties of objects that might be null or undefined.

Instead of:
student.address.city
⭐use:
student.address?.city


➡️If address exists:
const student = {
    name: "Rafi",
    address: {
        city: "Dhaka"
    }
};
console.log(student.address?.city);
// Output:Dhaka


➡️If address doesn't exist:
const student = {
    name: "Rafi"
};
console.log(student.address?.city);
// Output:undefined

📌Instead of throwing an error.


✅✅2a. Optional Chaining with Bracket Notation

You can also use:
object?.["property"]

Example:
const user = {
    name: "Rafi"
};
console.log(user?.["name"]);
// Output:Rafi



✅✅2b. Multiple Optional Chains

➡️For deeply nested objects:
const company = {
    employee: {
        job: {
            title: "Developer"
        }
    }
};

You can write:
console.log(company.employee?.job?.title);


📌If any optional part is missing, the result becomes undefined.
For example:
const company = {};
console.log(company.employee?.job?.title);
// Output:undefined



✅✅2c. Optional Chaining with Arrays
Optional chaining can also be used with arrays.

const users = [
    { name: "Rafi" }
];
console.log(users[0]?.name);
// Output:Rafi


➡️If the array is empty:
const users = [];
console.log(users[0]?.name);
// Output:undefined

⚠️Without ?., this would cause an error.




✅✅2d. Optional Chaining with Methods
You can safely call a method that might not exist.

📌The syntax is:object.method?.()

const user = {
    greet() {
        return "Hello";
    }
};
console.log(user.greet?.());
// Output:Hello


➡️If greet doesn't exist:
const user = {};
console.log(user.greet?.());
Output:undefined



✅✅2e. Optional Chaining with Function Calls

➡️Suppose a function may or may not be provided:
function process(callback) {
    callback?.();
}
process();
// Since callback is undefined, nothing happens.


➡️Without optional chaining:
function process(callback) {
    callback();
}
process();
// You would get a:TypeError




✅✅2f. Optional Chaining + Nullish Coalescing (??.)  ⭐⭐⭐
This combination is very useful.

➡️Optional chaining gives:undefined
when something doesn't exist.

➡️Then ?? can provide a default value.
const student = {
    name: "Rafi"
};
const city = student.address?.city ?? "Unknown";
console.log(city);
// Output:Unknown


⚠️ Important difference: ?? vs ||

const age = 0;
console.log(age || 18); // 18
console.log(age ?? 18); // 0


📌 ?? only uses the default when the value is:
null or undefined



✅✅2g. Optional Chaining Does NOT Work Everywhere
You cannot use optional chaining on the left side of an assignment.

❌ Wrong:
student.address?.city = "Dhaka";
This is invalid.

Instead:
student.address.city = "Dhaka";
provided that address actually exists.



✅✅2h. Normal Access vs Optional Chaining

| Normal                  | Optional Chaining          |
| ----------------------- | -------------------------- |
| `user.address.city`     | `user.address?.city`       |
| May throw error         | Safely returns `undefined` |
| Assumes property exists | Property may be missing    |
| Older syntax            | Modern JavaScript          |



*/