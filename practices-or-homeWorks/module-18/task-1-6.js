/* 

Module 18 — Practice Tasks 

Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
Return the final bill after tax is applied. Default tax rate is 5% when not provided.

Input:  calculateBill(1000)
Output: 1050
Input:  calculateBill(1000, 0.10)
Output: 1100

*/

const calculateBill=(amount, taxRate = 0.05) =>{
    return amount+amount*taxRate;
}
// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 0.10));





/*

Task 2: buildProfileCard(user) — Template Literals 
Given { name, title, company }, return a multiline string using template literal interpolation only.

Input:  { name: "Arif", title: "Developer", company: "Programming Hero" }
Output: "Arif\nDeveloper at Programming Hero"

*/

const buildProfileCard=(user) =>{
    return `${user.name}\n${user.title} at ${user.company}` ;
}

// console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));



/*  
Task 3: getLowestPrice(prices) — Spread Operator 
Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).

Input:  [340, 120, 560, 90]
Output: 90
 */

const  getLowestPrice=(prices) =>{
    return Math.min(...prices); //...prices = 340 120 560 90   i.e accessing eachItem of array without loop
}
// console.log(getLowestPrice([340, 120, 560, 90]));






/* 
Task 4: swapValues(a, b) — Destructuring 
Return [b, a] using array destructuring assignment, no temporary variable.

Input:  swapValues(5, 10)
Output:[10, 5]

*/

const swapValues=(a, b)=>{

    // let swap =[b,a]
    // return swap;

    //short
    return [b,a]
}
// console.log(swapValues(5,10));






/*
Task 5: getEmployeeDept(employee) — Nested Destructuring 
Given { name, job: { title, department } }, return { title, department } using nested destructuring.

Input:  { name: "Nadia", job: { title: "PM", department: "Product" } }
Output: { title: "PM", department: "Product" }

*/

const getEmployeeDept=(employee)=>{
    let {job:{title,department}} =employee;
    return {title,department};

/* 
⚠️Remember
return (a, b);
Does not return two values.It returns only b.

To return multiple values, commonly use:
return [a, b];       // Array

or:
return { a, b };     // Object

*/

}
// console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }));






/* 
Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 

Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
Input:  promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
Output: { name: "Rafi", title: "Senior Dev" }

(original object still has title: "Junior Dev")
*/

const promoteEmployee=(employee, newTitle)=>{
    let newEmployee= {...employee}; //newEmployee={ name: 'Rafi', title: 'Senior Dev' }
    let {name,title}=newEmployee; 
    // console.log(name,title); //Rafi Junior Dev
    
    return {name,title:newTitle}; //{ name: 'Rafi', title: 'Senior Dev' }
}
let emp={ name: "Rafi", title: "Junior Dev" }
console.log(promoteEmployee(emp,"Senior Dev"));
console.log(emp); //check original changed or not



