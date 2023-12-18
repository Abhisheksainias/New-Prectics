//++++++++++++++++++++++++++++++++++++

// Stack or Heap

let myEmail = "Abhisheksaini@gmail.com"

let anotherEmail = myEmail
anotherEmail = "absaini@gmail.com"

console.log(myEmail);
console.log(anotherEmail);


//+++++++HEAP+++++++

let userOne = {
email: "abhishek@gmail.com",
name : "abhishek"
}

let userTwo = userOne

userTwo.email = "absaini20@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);