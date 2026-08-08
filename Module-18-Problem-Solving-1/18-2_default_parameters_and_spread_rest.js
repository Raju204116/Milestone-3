
/*
 ✅ Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/
// Simple rule: discount is ALWAYS the first argument.


const calculateTotal = (discount, ...prices) => {


  //traditional
  /* let total = 0
   for(let element of prices){
    total +=element;
  }
  // console.log(total);
  let calculatedDiscount = total*discount /100;
  let priceAfterDiscount = total - calculatedDiscount;
  return priceAfterDiscount; */



  //ES6
  let total = prices.reduce((accumulator, element) => {
    // console.log(accumulator, "accum");
    return accumulator += element;
  }, 0)
  // console.log(total);
  let calculatedDiscount = total * discount / 100;
  let priceAfterDiscount = total - calculatedDiscount;
  return priceAfterDiscount;

}
console.log(calculateTotal(0, 100, 200, 300));
// console.log(calculateTotal(10, 100, 200));






/*
 ✅ Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

const mergeArr = (arr1,arr2) =>{

  let merged = [...arr1,...arr2] // merging by destructuring
  // console.log(merged); //[ 1, 2, 3, 2, 3, 4 ]

  // let removeDuplicate = new Set(merged);
  // console.log(removeDuplicate); //Set(4) { 1, 2, 3, 4 }

  let removeDuplicate = [...new Set(merged)] ;
  console.log(removeDuplicate); //[ 1, 2, 3, 4 ]
  
  
}
mergeArr([1,2,3],[2,3,4]);