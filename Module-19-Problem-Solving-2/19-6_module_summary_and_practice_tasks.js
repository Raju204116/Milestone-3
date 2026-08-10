/*
  Module 19 Summary — map, filter, find, reduce, chaining, closures, callbacks

  Quick recap:
    map()     -> transforms each item, returns a NEW array (same length)
    filter()  -> keeps items matching a condition, returns a NEW array (any length)
    find()    -> returns the FIRST matching item itself (or undefined), not an array
    reduce()  -> folds the whole array down to ONE value (always pass an initial value!)
    chaining  -> filter().map().reduce() reads left to right, step by step
    closures  -> a function "remembers" variables from where it was created
    callbacks -> functions passed as arguments (e.g. sort's comparator)
    mutation  -> objects/arrays are passed by reference — copy with {...obj} / [...arr]
                 before changing them if the original must stay untouched


  Practice tasks below: read the problem + example, fill in each TODO
  yourself first. 
  Full solutions are commented out at the bottom of this file — 
  only check them after you've attempted it.
*/



/*
  Practice Task 1: Tag Expensive Products

  Given an array of products, return a NEW array where each product
  also has an "expensive" boolean field (true if price >= 1000).
  Original array must not change.

  Input:
    [{ name: "Mouse", price: 600 }, { name: "Monitor", price: 12000 }]

  Output:
    [
      { name: "Mouse", price: 600, expensive: false },
      { name: "Monitor", price: 12000, expensive: true },
    ]
*/

const tagExpensiveProducts = (products) => {
  // TODO: use map() + spread — don't forget to return!

  //my solution
  /* let expensiveProducts=products.map((item)=>{
      let {price}=item;
     if(price>=1000){
       return {
         ...item,
         expensive:true
       }
     }else{
       return {
         ...item,
         expensive:false
       }
     }
   })
 
   return expensiveProducts; */

  //class solution
  return products.map((item) => ({
    ...item,
    expensive: item.price >= 1000,

  }));

  //✅When an arrow function has {} immediately after =>, JavaScript treats {} as a function body.
  //⚠️But if you want to directly return an object from an arrow function, you need to wrap the object in parentheses:
  //The parentheses({}) tell JavaScript: "This {} is an object that I want to return, not the function body."
};

// console.log(tagExpensiveProducts([{ name: "Mouse", price: 600 }, { name: "Monitor", price: 12000 }]));






/*
  Practice Task 2: Find the First Out-of-Stock Item

  Given an array of items with a "stock" field, return the first item
  where stock === 0. Return undefined if everything is in stock.

  Input:
    [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }]

  Output:
    { name: "Bag", stock: 0 }
*/

const findOutOfStock = (items) => {
  // TODO: use find()
  return items.find((element) => element.stock === 0); //if you don't use {}, then no need to extra parenthesis for direct return
};

//more short
// const findOutOfStock = items => items.find(element => element.stock === 0);

// console.log(findOutOfStock([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }]));
// console.log(findOutOfStock(  [{ name: "Pen", stock: 5 },{ name: "Bag", stock: 10 }]));







/*
  Practice Task 3: Total Marks of Passing Students (Chaining)

  Given students with marks, filter students who passed (marks >= 40),
  then sum their marks — in one chained expression.

  Input:
    [{ name: "Rafi", marks: 80 }, { name: "Karim", marks: 30 },{ name: "R", marks: 90 }]

  Output:
    170
*/

const totalPassingMarks = (students) => {
  // TODO: filter -> map/reduce
  
  return  students.filter((item) => item.marks >= 40)       //[ { name: 'Rafi', marks: 80 }, { name: 'R', marks: 90 } ]
                  .map(item => item.marks)                  //[ 80,90 ]
                  .reduce((accum, item) => accum + item, 0) //170
                  // .reduce((accumulator, item) => accumulator + item.marks, 0);  //don't need of map
   
};

// console.log(totalPassingMarks([{ name: "Rafi", marks: 80 }, { name: "Karim", marks: 30 }, { name: "R", marks: 90 }]));
  


/*
  Practice Task 4: Closure — Bank Balance Tracker

  createAccount(startingBalance) returns an object with deposit(amount)
  and getBalance() methods. Balance must be private — no direct access
  except through getBalance().

  Input:
    const acc = createAccount(100);
    acc.deposit(50);
    acc.getBalance();

  Output:
    150
*/

const createAccount = (startingBalance) => {
  // TODO: keep "balance" private inside the closure,
  // return { deposit, getBalance }

  let balance = startingBalance;
  return {
    deposit: (amount) => {
      balance += amount;
    }, 
    getBalance: () => balance,
  };
  // console.log(deposit); //150
  // console.log(getBalance); //150
  


};

const acc = createAccount(100); //100
acc.deposit(50);                //150
console.log(acc.getBalance());  //150









/*
  Practice Task 5: Sort Products by Price (Ascending) — No Mutation

  Return a NEW array of products sorted by price, low to high. The
  original products array must stay in its original order.

  Input:
    [{ name: "Bag", price: 500 }, { name: "Pen", price: 20 }]

  Output:
    [{ name: "Pen", price: 20 }, { name: "Bag", price: 500 }]
*/

const sortByPriceAscending = (products) => {
  // TODO: copy with spread first, then .sort((a, b) => a.price - b.price)

  let products2 = [...products]; //keeping the origianl same

  return products2.sort((a,b)=>a.price -b.price)

};

// console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 20 }]));






/* --------------------------------------------------------------------
   SOLUTIONS — reveal only after attempting the tasks above yourself.
   --------------------------------------------------------------------
// 1
const tagExpensiveProducts = (products) => {
  return products.map((product) => ({
    ...product,
    expensive: product.price >= 1000,
  }));
};




// 2
const findOutOfStock = (items) => {
  return items.find((item) => item.stock === 0);
};



//3
const totalPassingMarks = (students) => {
  return students
    .filter((student) => student.marks >= 40)
    .reduce((accumulator, student) => accumulator + student.marks, 0);
};


//4
const createAccount = (startingBalance) => {
  let balance = startingBalance;

  return {
    deposit: (amount) => {
      balance += amount;
    },
    getBalance: () => balance,
  };
};


//5
const sortByPriceAscending = (products) => {
  return [...products].sort((a, b) => a.price - b.price);
};

-------------------------------------------------------------------- */