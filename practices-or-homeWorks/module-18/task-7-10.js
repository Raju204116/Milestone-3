/*  
Task 7: sumAllPrices(prices) — for...of 
Given an array of numbers, return their sum using for...of.
Input:  [100, 250, 75]
Output: 425
*/

const sumAllPrices = (prices) => {

    let sum = 0;
    for (let item of prices) {
        sum += item;
    }
    return sum;
}
// console.log(sumAllPrices([100, 250, 75]));




/* 
Task 8: getManagerName(employee) — Optional Chaining 

Given an employee object that may or may not have a manager property, return the manager's name safely, 
or undefined if missing.
Input:  { name: "Mim", manager: { name: "Tanvir" } }
Output: "Tanvir"

Input:  { name: "Rafi" }
Output: undefined
 */

const getManagerName = (employee) => {

    
    if (Object.hasOwn(employee,"manager")) {
        let { manager: { name } } = employee;
        return name;
    }

    return undefined;


}
// console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
// console.log(getManagerName({ name: "Rafi" }));




/* 
Task 9: splitFirstRest(arr) — Rest Syntax 
Return { first, rest } where first is the first element and rest is an array of all remaining elements.
Input:  [10, 20, 30, 40]
Output: { first: 10, rest: [20, 30, 40] }

 */

function splitFirstRest(arr){
    let [first,...rest] =arr;
    return {first,rest};
}
// console.log(splitFirstRest([10, 20, 30, 40]));




/* 
Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array Update) 

Return a new array with the value at index replaced by newValue, without mutating the original array.
Input:  cloneAndUpdate([5, 10, 15], 1, 99)
Output: [5, 99, 15]
(original array still [5, 10, 15])

*/

function cloneAndUpdate(arr, index, newValue) {

    // let newArr=arr;  //By only copying the array, the original array will be changed
    // // console.log(newArr);//[ 5, 10, 15 ]
    // newArr[index]=newValue;
    // // console.log(newArr); //[ 5, 99, 15 ]
    // return newArr;



    let newArr2=[...arr]  //But by spreading , the original will not change
    // console.log(newArr2);//[ 5, 10, 15 ]
     newArr2[index]=newValue;
    // // console.log(newArr2); //[ 5, 99, 15 ]
    return newArr2;
}

let arr=[5, 10, 15];
console.log(cloneAndUpdate(arr, 1, 99));
console.log("Original:",arr);

