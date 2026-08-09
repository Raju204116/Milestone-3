
/*
  Problem 1: User Lookup by ID

  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

const findUserById=(users, fid) =>{

  let expectedUser = users.find((eachUser) =>{
    let {id}= eachUser;
    // console.log(id);
    return id ===fid ;
  });
  // console.log(expectedUser);

  if(expectedUser){
    return expectedUser;
  }else
    return "User not found."
  
}
let users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
      { id: 3, name: "Rahim" }
    ];
console.log(findUserById(users,2));
console.log(findUserById(users,3));
console.log(findUserById(users,4));










/*
  Problem 2: Shopping Cart Total 

  getCartTotal(cart) — sum = price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/


const getCartTotal=(cart)=>{

  let total =cart.reduce((accum,eachItem)=>{
    let {price,qty}=eachItem;
    // console.log(qty);
    
    accum += price* qty;
    // console.log(accum);
    return accum;

    // return accum + (price*qty);
    
  },0);
  // console.log("total=",total);
  
  return total;
}

let  cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
      // { name: "Speaker", price: 500, qty: 2 },
      // { name: "Perfume", price: 2500, qty: 1 },
    ];
console.log(getCartTotal(cart));


