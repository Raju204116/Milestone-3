/*
  Problem 1: Nested Response Extractor

  Extract specific fields from a (nested API-like response object) using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const nestedExtractor =(obj) =>  {
  let {user:{name:userName,age=18}} =obj;
  // console.log(user); // user is undefined =>after destructuring/renaming(:) user we can't use it
  // console.log(name);  //same => now we must use the userName, not the name
  // console.log(userName,age); //Rafi,22
  
  return { userName,age};
  
}
let nestedObj = { user: { name: "Rafi", age: 22 } }
console.log(nestedExtractor(nestedObj));

let nestedObj2 = { user: { name: "Rocky",   } }
console.log(nestedExtractor(nestedObj2));

console.log(nestedExtractor({ user: { name: "Rafi", age: 25 } }));








/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/

const swapRest=(a,b,arr) =>{

// let a=5;
// let b=10;
// [a,b]=[b,a]  //a=10,b=5

let swap =[b,a]
let [first,...rest] =arr

return {
  swap,
  first,
  rest
}

}
console.log(swapRest(10,5,[10,20,30,40]));
