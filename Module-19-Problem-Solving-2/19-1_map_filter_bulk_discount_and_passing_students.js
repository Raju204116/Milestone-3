/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/


const bulkDiscount =(prices,discountRate=0)=>{

  //traditional way
/*   let newPrices = [...prices]; //to keep the original same
  let discount=0;
  let priceAfterDiscount = [];

  for(let element of newPrices){
    discount = element*discountRate /100;
    priceAfterDiscount.push(element-discount);
  }
  return priceAfterDiscount; */

 //ES6
 let discountedPrice=0;
 let priceAfterDiscount = prices.map((element) =>{
    discountedPrice = element - (element*discountRate/100);
    return discountedPrice;

 });

 return priceAfterDiscount;

}

let prices =[500, 1000, 250];
console.log(bulkDiscount(prices,10));
console.log("The original:",prices);

let prices2 = [500, 1000, 250, 400, 700];
console.log(bulkDiscount(prices2,20));




/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

const getPassingStudents=(students, threshold) =>{

  let filteredStudents = students.filter((eachStudent)=>{
    let {marks}=eachStudent;
    // console.log(marks);
    return marks>=threshold;
  });

  // console.log(filteredStudents);
  return filteredStudents;

}

let  students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
      { name: "Akash", marks: 59 }
    ];

console.log(getPassingStudents(students,60));
