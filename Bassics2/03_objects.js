// singleton
// Object.create

// object literals

const mysym = Symbol("key1")


const jsuser = {
name:"Abhishek",
"full name": "Abhishek Saini",
[mysym]: "mykey1",
age: 22,
location: "Alwar",
email: "abhisheksaini@gmail.com",
isLoggedIn: false,
lastLoginDay: ["Monday", "Saturday"]
}

// console.log(jsuser.email) // useong obj with dot 
// console.log(jsuser["email"]); // using obj without dot
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email = "absaini@gmail.com"
// Object.freeze(jsuser) // freeze the obj(no any changes)
jsuser.email = "ab@gmail.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello user");
}
jsuser.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());