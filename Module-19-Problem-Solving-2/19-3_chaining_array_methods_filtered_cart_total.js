/*
  Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
  
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 2 },
    ]
    minPrice = 500

  Output:
    3800   (800*1 + 1500*2)

  Build it live, one step at a time (uncomment one block, log, then move on):
    1. filter alone        -> just the expensive items
    2. filter + map        -> price*qty for each expensive item
    3. filter + map + reduce -> single total number
*/



const getExpensiveItemsTotal=(cart, minPrice) =>{

//using 3 different function separately

 /* let expensiveItems = cart.filter((eachItem)=>{
    let {price} =eachItem;
    return price>=minPrice;
  });
  // console.log(expensiveItems);//Headphone,Watch
  
  
  let eachExpensiveItemsPrice=expensiveItems.map((eachItem)=>{
    let {price,qty}=eachItem;
    // console.log(price); //800,1500
    return price*qty;
  });
  // console.log(eachExpensiveItemsPrice); //[ 800, 3000 ]


  let totalCostOfExpensives = eachExpensiveItemsPrice.reduce((accum,eachItem)=>{
    return accum += eachItem;
  },0);
  // console.log(totalCostOfExpensives); //3800 
  
  return totalCostOfExpensives;
  */
  


  //using chaining method
  let totalCostOfExpensives= 
  cart.filter((eachItem)=> eachItem.price >= minPrice)
      .map((eachItem)=> eachItem.price*eachItem.qty)
      .reduce((accum,element)=> accum+=element ,0);

  return totalCostOfExpensives;

}//main end

let  cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 2 },
    ];
console.log(getExpensiveItemsTotal(cart,500));

