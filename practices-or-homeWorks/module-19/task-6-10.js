
/*  
Task 6: createIdGenerator() — Closures 
Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
Input: 
const nextId = createIdGenerator(); 
nextId(); 
nextId(); 
nextId();

 Output: 1, 2, 3
*/


/*  
Task 7: sortByPriceAscending(products) — Callback Function 
Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
Input: 
[{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
Output:
 [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]
*/


/*  
Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
Output: [{ name: "Rafi", points: 25 }]
 (original array's object must still have points: 20)
*/


/*  
Task 9: isStrictMatch(input, target) — Truthy/Falsy and === 
Return true only if input strictly equals target in both value and type, false otherwise.
Input: isStrictMatch("18", 18) 
Output: false
Input: isStrictMatch(18, 18) 
Output: true
*/


/*  
Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
Given an array of orders { product, unitsSold }, 
return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
Output: "Pen"

*/