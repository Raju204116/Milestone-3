
/*  
Task 6: createIdGenerator() 
Return a function that generates a new sequential ID starting from 1 each time it is called,
using an internal counter with no global variable.

Input: 
const nextId = createIdGenerator(); 
nextId(); 
nextId(); 
nextId();

 Output: 1, 2, 3
*/

function createIdGenerator() {
    let id = 1;

    // function nextId(){
    //     return id++;
    // }
    // return nextId;


    //shorter
    // let  nextId=()=>id++;
    // return nextId;

    //more short
    return () => id++;  //this is called annonymous function

}
// const nextId = createIdGenerator(); 
// console.log(nextId()); //1
// console.log(nextId()); //2
// console.log(nextId()); //3





/*  
Task 7: sortByPriceAscending(products) 
Given an array of product objects { name, price }, return a new array sorted from lowest to highest price 
using a comparator callback in sort().
Input: [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
Output:[{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]
*/


function sortByPriceAscending(products) {
    return [...products].sort((a, b) => {   //[...products] to keep the original unchange
        return a.price - b.price;
    })
}
// console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] ));



/*  
Task 8: applyBonusPoints(users, bonus) 
Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
Output: [{ name: "Rafi", points: 25 }]
 (original array's object must still have points: 20)
*/

function applyBonusPoints(users, bonus) {
    return users.map((item) => {
        return {
            // item, //newObj ={ item: { name: 'Rafi', points: 20 }, points: 25 } //if we give only item, then the result would be like this

            ...item, //newObj={ name: "Rafi", points: 20 }  //it is just a copy of item Object using spreading
            points: item.points + bonus //newObj={ name: "Rafi", points: 20, points:25 }  
            //==> newObj={ name: "Rafi", points: 25 } //because later properties(25) overwrite earlier properties(20) when they have the same key(points).
        }
    });

}

// let arr=[{ name: "Rafi", points: 20 }]
// console.log(applyBonusPoints(arr,5 ));
// console.log(arr);



/*  
Task 9: isStrictMatch(input, target) 
Return true only if input strictly equals target in both value and type, false otherwise.
Input: isStrictMatch("18", 18) 
Output: false
Input: isStrictMatch(18, 18) 
Output: true
*/


function isStrictMatch(input, target) {
    if (input === target) {
        return true;
    } else
        return false;
}
// console.log(isStrictMatch("18", 18));//false
// console.log(isStrictMatch(18, 18));//true





/*  
Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style)  //capstone-style means combine multiple concepts
Given an array of orders { product, unitsSold }, 
return the name of the product with the highest total units sold across all orders 
(a product may appear in multiple orders).

Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
Output: "Pen"
*/


/*//my solution
function getTopSellingProduct(orders) {
     let highestSold = 0;
    let highestSoldName = "";
    for (let item of orders) {
        if (item.unitsSold > highestSold) {
            highestSold = item.unitsSold;
            // console.log(highestSold);//30
            highestSoldName = item.product;
            // console.log(highestSoldName);//pen
        }
    }
    return highestSoldName; //pen 
}
*/



//But the requirements actually said that pen =30+25=55, that's why pen is highestSoldName
//Here capstone = Aggregation + selection
function getTopSellingProduct(orders) {
  // Step 1: map orders into [product, unitsSold] pairs (not strictly needed, but shows map)
  const pairs = orders.map(({ product, unitsSold }) => [product, unitsSold]);
 //   console.log(pairs); //[ [ 'Pen', 30 ], [ 'Bag', 12 ], [ 'Pen', 25 ] ]
    

  // Step 2: reduce pairs into totals
  const totals = pairs.reduce((acc, [product, units]) => {
    acc[product] = (acc[product] || 0) + units;
    return acc;
  }, {});
 //   console.log(totals); //{ Pen: 55, Bag: 12 }
  

  // Step 3: find top product
  let top = null;
  for (const item in totals) {
    if (top === null || totals[item] > totals[top]) top = item;
  }
 //   console.log(top); //pen
  
  return top;
}
    
//Breakdown
/* 
Step	product	    units	acc[product] || 0	    new acc[product]	acc after this step
1	    "Pen"	    30	    undefined || 0 → 0	    0 + 30 = 30	        { Pen: 30 }
2	    "Bag"	    12	    undefined || 0 → 0	    0 + 12 = 12	        { Pen: 30, Bag: 12 }
3	    "Pen"	    25	    30 || 0 → 30	        30 + 25 = 55	    { Pen: 55, Bag: 12 }


What is acc?
Acc is an object (starts as {}), used to accumulate totals. See that {} at the very end? That's the second argument to reduce — it's the initial value of acc. 
It's an empty object, not an array. So acc starts as {} and grows into something like { Pen: 30, Bag: 12 } as we go.

What is reduce((acc, [product, units]) ?
Good catch — this is a different pattern than before. Here we're destructuring an array, not an object.
Normally you'd write the parameter as a single name and access pieces manually:reduce((acc, pair) 
But look at the pairs from map, It's an array of arrays — each inner array has exactly 2 items: [productName, unitsNumber]
So [product, units]  - does that unpacking automatically, right at the point where the parameter is received.

what is acc[product]?
Since acc is a plain object, acc[product] is property access using a variable as the key — this is called bracket notation.


Why acc[product] || 0 
If acc[product] doesn't exist yet (i.e., this is the first time we've seen this product), acc[product] is undefined, 
   which is falsy — so || 0 kicks in and gives us 0 instead. This avoids undefined + units which would produce NaN.

If acc[product] does already exist (we've seen this product before), it just uses that existing number   + units



*/




let orders = [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }];
console.log(getTopSellingProduct(orders));













//Observing object's log
let test={ product: "Pen", unitsSold: 30 };
for(let key in test){
    // console.log(key); //product  //unitsSold

    // console.log(test["product"]); //Pen
    // console.log(test[key]); //pen //30
}
