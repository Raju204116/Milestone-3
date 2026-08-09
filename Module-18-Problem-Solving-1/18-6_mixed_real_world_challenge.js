/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/


// main func
const addGrade = (students) => {

  // let newArr = [...students];  //destructuring to keep the original array unchanged 
 // console.log(newArr);          //no need of this,map directly returns a new array
  


  // getting grades
  let gettingGrade = (marks) => {
    return marks >= 90 ? "A+" : marks >= 80 ? "A" : marks >= 60 ? "B" : "Fail";
  }



  // adding grades
  let addingGrades = students.map((eachStudent) => {  //eachStudnet = { name: 'Rafi', marks: 85 }, //an object, not an array
    let { name, marks } = eachStudent;
    //  console.log(name); //rafi, karim
    //  console.log(marks); //85,45
    // let newStudentWithGrade ={name,marks,grade:gettingGrade(marks)} ; 

    return { name, marks, grade: gettingGrade(marks) };
  })

  return addingGrades; //main function returning
}


let students = [
  { name: "Rafi", marks: 85 },
  { name: "Karim", marks: 45 }
]
console.log(addGrade(students));
console.log("The original array:",students);//original remains same









/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty(quantity). 
  Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

const cartTotalCalcultor = (products) => {



  let totalItems = 0;
  let totalPrice = 0;

  for (let element of products) {
    let { price, qty } = element;
    // console.log(price, qty); //100 1  //100 2
    totalItems += qty;
    totalPrice += price * qty;
  }
  // console.log(totalItems); //3
  // console.log(totalPrice); //300

  return `Total: ${totalItems || 0} items, ${totalPrice || 0} Taka` ; // || 0 means the default value


}


let products = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Notebook", price: 100, qty: 2 },
  // { name: "Headphone", price: 500, qty: 1 }
]
console.log(cartTotalCalcultor(products)); //Total: 3 items, 300 Taka

let products2 =[];
console.log(cartTotalCalcultor(products2)); //Total: 0 items, 0 Taka
