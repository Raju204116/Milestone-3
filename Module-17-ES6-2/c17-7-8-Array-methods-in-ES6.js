/* 
✅✅✅Normal Array Methods 

| Method         | Main Purpose              | Returns            | Mutates? |
| -------------- | ------------------------- | ------------------ | -------- |
| `push()`       | Add at end                | New length         | ✅        |
| `pop()`        | Remove from end           | Removed item       | ✅        |
| `shift()`      | Remove from beginning     | Removed item       | ✅        |
| `unshift()`    | Add at beginning          | New length         | ✅        |
| `slice()`      | Extract/copy portion      | New array          | ❌        |
| `splice()`     | Add/remove/replace        | Removed items      | ✅        |
| `includes()`   | Check value               | Boolean            | ❌        |
| `indexOf()`    | Find value's index        | Number             | ❌        |
| `sort()`       | Sort array                | Same array         | ✅        |
| `reverse()`    | Reverse array             | Same array         | ✅        |
| `join()`       | Array → String            | String             | ❌        |
| `concat()`     | Combine arrays            | New array          | ❌        |



✅✅ES6 Array Methods  (Some methods are Introduced before ES6,but widely used in ES6)

| Method        | Introduced | Purpose                                       | Example                            |
| ------------- | ---------- | --------------------------------------------- | ---------------------------------- |
| `find()`      | **ES6**    | Finds the first element matching a condition  | `arr.find(x => x > 10)`            |
| `filter()`    | ES5        | Returns matching elements                     | `arr.filter(x => x > 10)`          |
| `map()`       | ES5        | Transforms every element                      | `arr.map(x => x * 2)`              |
| `reduce()`    | ES5        | Reduces array to one value                    | `arr.reduce((a,b) => a+b)`         |
| `forEach()`   | ES5        | Executes function for each element            | `arr.forEach(x => console.log(x))` |
| `findIndex()` | **ES6**    | Finds the index of the first matching element | `arr.findIndex(x => x > 10)`       |
| `some()`      | ES5        | Checks if at least one element matches        | `arr.some(x => x > 10)`            |
| `every()`     | ES5        | Checks if all elements match                  | `arr.every(x => x > 10)`           |
| `includes()`  | **ES2016** | Checks whether value exists                   | `arr.includes(10)`                 |
| `flat()`      | **ES2019** | Flattens nested arrays                        | `arr.flat()`                       |
| `flatMap()`   | **ES2019** | Map + flatten                                 | `arr.flatMap(x => [x, x*2])`       |


*/

/* 

✅✅✅Details of ES6



✅✅1. find()
Returns the first element that satisfies a condition.

📌Returns: First matching element.
Mutates: 

const numbers = [10, 25, 30, 45];
const result = numbers.find(number => number > 30);
console.log(result);
// Output:45

⚠️ If nothing is found:
undefined


➡️ With objects
const users = [
    { name: "A", age: 17 },
    { name: "B", age: 22 }
];
const user = users.find(user => user.age >= 18);
console.log(user);
// Output:{ name: "B", age: 22 }



✅✅2. filter()
Creates a new array containing all elements that satisfy a condition.

📌Returns: New array.
Mutates: 


const numbers = [10, 15, 20, 25];
const result = numbers.filter(number => number >= 20);
console.log(result);
// Output:[20, 25]

➡️Objects
const users = [
    { name: "A", isActive: true },
    { name: "B", isActive: false },
    { name: "C", isActive: true }
];
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers);
// Output:
[
    { name: "A", isActive: true },
    { name: "C", isActive: true }
]



✅✅3. map()
Creates a new array by transforming every element.

📌Important: map() must return a value for each element.
Mutates: 

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
// Output:[2, 4, 6, 8]


➡️Objects
const users = [
    { name: "Rafi", points: 20 }
];
const updatedUsers = users.map(user => ({
    ...user,
    points: user.points + 5
}));
// Output:
[
    { name: "Rafi", points: 25 }
]



✅✅4. reduce()
📌Reduces an array into one final value.

const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
console.log(total);

// Output:60
Here:
sum     → accumulator
number  → current element
0       → initial value


➡️Another example
const scores = [80, 70, 90];
const total = scores.reduce((sum, score) => sum + score, 0);

// Result:240



📌reduce() can produce many types of results:
Array → Number
Array → String
Array → Object
Array → Array





✅✅5. forEach()
Executes a function for each element.

📌forEach() does not create/return a new array.
Mutates:  by itself.

const numbers = [10, 20, 30];
numbers.forEach(number => {
    console.log(number);
});
// Output:
10
20
30


➡️Unlike map():
const result = numbers.forEach(number => number * 2);
console.log(result);
// Output:undefined



✅✅6. sort()
Sorts the array.
Mutates: Yes

➡️Strings
const fruits = ["mango", "apple", "banana"];
fruits.sort();
console.log(fruits);
// Output:["apple", "banana", "mango"]


➡️Numbers
⚠️ By default, sort() converts values to strings.
So use a comparison function:

const numbers = [100, 5, 20, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output:[5, 10, 20, 100]

➡️Descending:
numbers.sort((a, b) => b - a);



✅✅7. findIndex()
📌Returns the index of the first element satisfying a condition.

const numbers = [10, 25, 30, 45];
const index = numbers.findIndex(number => number > 30);
console.log(index);
// Output:3

⚠️If nothing is found:-1



✅✅8. indexOf()
Returns the index of the first occurrence of a value.

📌Returns: Index or -1.
Mutates: 

const numbers = [10, 20, 30, 20];
console.log(numbers.indexOf(20)); // 1
console.log(numbers.indexOf(50)); // -1




✅✅9. lastIndexOf()
📌Returns the index of the last occurrence.

const numbers = [10, 20, 30, 20];
console.log(numbers.lastIndexOf(20));
// Output:3



✅✅10. every()
Checks whether all elements satisfy a condition.

📌Returns: Boolean.

const numbers = [10, 20, 30];
const result = numbers.every(number => number > 5);
console.log(result);
// Output:true

⚠️But:
const result = numbers.every(number => number > 20);
// Output:false



✅✅11. some()
Checks whether at least one element satisfies a condition.

📌Returns: Boolean.
If at least one is true → true.
Mutates: 

const numbers = [10, 20, 35];
const result = numbers.some(number => number > 30);
console.log(result);
// Output:true


✅✅12. flat()
Flattens nested arrays.

const numbers = [1, 2, [3, 4], [5, 6]];
console.log(numbers.flat());
// Output:[1, 2, 3, 4, 5, 6]

➡️For deeper nesting:
const numbers = [1, [2, [3, 4]]];
console.log(numbers.flat(2));



✅✅13. flatMap()
Performs a map() and then flattens the result by one level.

const numbers = [1, 2, 3];
const result = numbers.flatMap(number => [number, number * 2]);
console.log(result);
// Output:[1, 2, 2, 4, 3, 6]

 */