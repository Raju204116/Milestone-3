/* 

Module 19 — Practice Tasks

Task 1: getFormattedPrices(prices)  
Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
Input: [100, 250, 75] 
Output: ["$100", "$250", "$75"]
*/

function getFormattedPrices(prices){
    return prices.map((item)=>`$${item}`);
}
// console.log(getFormattedPrices([100, 250, 75] ));




/*  
Task 2: getAvailableProducts(products)  
Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
Input: 
[{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
Output: 
[{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]
*/

function getAvailableProducts(products){
   return products.filter((item)=>item.stock >0);

}
// console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] ));



/*  
Task 3: findProductByName(products, name) 
Given an array of product objects, return the first product matching the given name, or undefined if not found.
Input: products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
Output: { name: "Bag", price: 500 }
*/

function findProductByName(products, name) {
    return products.find((item)=>item.name==="Bag");
}
// let products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }]
// console.log(findProductByName(products,"Bag"));

// let products2 = [{ name: "Pen", price: 10 }, { name: "Bbb", price: 500 }]
// console.log(findProductByName(products2,"Bag"));


/*   
Task 4: getTotalStockValue(products) 
Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
Input:[{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
Output: 400
*/

function getTotalStockValue(products) {
    return products.reduce((accum,item)=>{
        return accum + (item.price*item.stock);
    },0)

}

// console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }] ));


/*  
Task 5: getDiscountedTotalForCategory(products, category) 
Given an array of products { name, category, price }, return the total price of all products in the given category 
after applying a 10% discount to each.
Input: products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
Output: 144
*/

function getDiscountedTotalForCategory(products, category){
   
    return products.filter((item)=>item.category===category)  //[{ name: 'Pen', category: 'stationery', price: 100 },{ name: 'Notebook', category: 'stationery', price: 60 }]
                   .map((item)=>item.price-item.price*0.1)    //[ 90, 54 ]
                   .reduce((accum,item)=>accum+item ,0)       //144
}
let products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }]
// console.log(getDiscountedTotalForCategory(products,"stationery" ));


