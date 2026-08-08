/* 

Module 18 — Practice Tasks 

Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
Return the final bill after tax is applied. Default tax rate is 5% when not provided.
Input:  
calculateBill(1000)
Output: 
1050
Input:  
calculateBill(1000, 0.10)
Output: 
1100


Task 2: buildProfileCard(user) — Template Literals 
Given { name, title, company }, return a multiline string using template literal interpolation only.

Input:  
{ name: "Arif", title: "Developer", company: "Programming Hero" }
Output: 
"Arif\nDeveloper at Programming Hero"


Task 3: getLowestPrice(prices) — Spread Operator 
Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
Input:  
[340, 120, 560, 90]
Output: 
90


Task 4: swapValues(a, b) — Destructuring 
Return [b, a] using array destructuring assignment, no temporary variable.
Input:  
swapValues(5, 10)
Output:
 [10, 5]


Task 5: getEmployeeDept(employee) — Nested Destructuring 
Given { name, job: { title, department } }, return { title, department } using nested destructuring.
Input:  
{ name: "Nadia", job: { title: "PM", department: "Product" } }
Output: 
{ title: "PM", department: "Product" }


Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
Input:  
promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
Output: 
{ name: "Rafi", title: "Senior Dev" }
(original object still has title: "Junior Dev")


Task 7: sumAllPrices(prices) — for...of 
Given an array of numbers, return their sum using for...of.
Input:  [100, 250, 75]
Output: 425


Task 8: getManagerName(employee) — Optional Chaining 
Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
Input:  { name: "Mim", manager: { name: "Tanvir" } }
Output: "Tanvir"

Input:  { name: "Rafi" }
Output: undefined


Task 9: splitFirstRest(arr) — Rest Syntax 
Return { first, rest } where first is the first element and rest is an array of all remaining elements.
Input:  [10, 20, 30, 40]
Output: { first: 10, rest: [20, 30, 40] }


Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
Input:  cloneAndUpdate([5, 10, 15], 1, 99)
Output: [5, 99, 15]
(original array still [5, 10, 15])













*/