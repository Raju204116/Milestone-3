
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
Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style)  //capstone means  combine concepts
Given an array of orders { product, unitsSold }, 
return the name of the product with the highest total units sold across all orders 
(a product may appear in multiple orders).

Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
Output: "Pen"

*/


function getTopSellingProduct(orders) {

    //my solution
   /*  let highestSold = 0;
    let highestSoldName = "";
    for (let item of orders) {
        if (item.unitsSold > highestSold) {
            highestSold = item.unitsSold;
            // console.log(highestSold);//30
            highestSoldName = item.product;
            // console.log(highestSoldName);//pen
        }
    }
    return highestSoldName; //pen */


    //the  requirements actually say that pen =30+25=55, that's why pen is highestSoldName

    

}

let orders = [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }];
console.log(getTopSellingProduct(orders));
