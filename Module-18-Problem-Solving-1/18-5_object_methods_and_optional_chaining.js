/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/



const mostExpensive=(products)=>{

  let productKeys = Object.keys(products);
  // console.log(productKeys); //[ 'pen', 'book', 'bag' ]

  let highest =0;
  let expensiveProductName ="";
  for(let key of productKeys){
    // console.log(key); //pen, book, bag
    // console.log(products[key]); //20,150,500
    
    if(highest < products[key]){ // NB: not productKeys[key] , then the output will be undefined
      highest =products[key];
      // console.log(highest);
      expensiveProductName=key;
    }
  }

  return expensiveProductName;
}

console.log(mostExpensive({ pen: 20, book: 150, bag: 500 }));
console.log(mostExpensive({ pen: 20, book: 150, bag: 500, bat: 750, laptop: 30000, desktop: 70000 }));



/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? 
  without throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let student = {
  name : "raju",
  age :20,
  address:{
    village:"lohachura",
    post:"Raninagar"
  }
}

const safeAccess =(student)=>{
  // return student?.address?.post ??"No Post found" ;
  // return student?.name ??"No name found";
  return student?.city ?? "No city found";       //NB : ?? works like else statement
}
console.log(safeAccess(student));
