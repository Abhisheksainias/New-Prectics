// const tinderuser = new Object() // singleton obj
const tinderuser = {};

tinderuser.id = "123abhi";
tinderuser.name = "Abhi";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      fristname: "Abhishek",
      lastname: "Saini",
    },
  },
};

// console.log(regularuser.fullname.userfullname.fristname);

// how to be add any two & more obj

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

//  const obj3 = Object.assign({}, obj1, obj2) // type1

const obj3 = { ...obj1, ...obj2, ...obj4 }; // type2 (using spread method)
//  console.log(obj3);

const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    name: "Abhishek",
  },
];
user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); //every key & values in different perticuler array

console.log(tinderuser.hasOwnProperty('isLoggedIn'));