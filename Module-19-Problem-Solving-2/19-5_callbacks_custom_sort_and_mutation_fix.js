/*
  Problem 1: Custom Sort — Descending Numbers

  sortDescending(nums) — sort an array of numbers from largest to smallest, using a comparator callback passed 
  to .sort(). Return a NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/

const sortDescending=(nums) =>{
    let num2=[...nums] //to keep the original unchanged

    let descending = num2.sort((a,b)=>{
      return b-a;
    });
    // console.log(descending);
    
    return descending;
}

let nums=[1, 10, 2, 25, 3];
console.log(sortDescending(nums));
console.log("Original :",nums);




console.log("Problem-2");
/*
  Problem 2: Fix the Mutation Bug — Discount Preview

  previewDiscount(cart) — should return a NEW array showing what each cart item's price WOULD be after a 10% discount,
  WITHOUT changing the original cart.
  The buggy version below accidentally mutates the original objects because objects/arrays are passed by REFERENCE —
  writing to item.price inside map() edits the very same object the original cart array points to.

  Input:
    cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

  Output (new array; original cart price fields unchanged):
    [
      { name: "Pen", price: 90 },
      { name: "Bag", price: 450 },
    ]
*/


// Buggy version (for live demo) — log cart before/after and watch the ORIGINAL prices change even though
// we only meant to "preview".

// const previewDiscount = (cart) => {

//   return cart.map((item) => {
//     item.price = item.price - item.price * 0.1; 
//     return item;
//   });
// };



// Fix version
const previewDiscount = (cart) => {

  return cart.map((item) => {
    return {
      // name: item.name,
      // color:item.color,
      ...item, //there may be varius items, so no need to return one by one
      price:item.price - item.price * 0.1 };
  });

};

let cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
      { name:"Busket", color:"Red", price: 1000},
      { name:"Busket", shopNo:5, price: 1000}
    ]
console.log(previewDiscount(cart));
console.log("Original:",cart);
