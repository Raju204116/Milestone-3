
/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.


var status = "Order Placed";

for (var i = 1; i <= 3; i++) {
  var status = "Processing Item " + i;
  // console.log(status);
}
console.log("Final Status:", status); // Processing Item  , but it should be "Order Placed"

*/

let status = "Order Placed";

for(var i=1;i<=3;i++){
  let status ="Processing item: "+ i;
  console.log(status);
}
console.log("Final Status : ", status);






/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/


function receiptGenerator(name,price,qty){
    // let receipt = console.log(`${name} x${qty} = ${price * qty} Taka`);
    let receipt =`${name} x${qty} = ${price * qty} Taka` ;
    return receipt;
    
}
// receiptGenerator("Pen", 20, 3)
console.log(receiptGenerator("Pen", 20, 3));




