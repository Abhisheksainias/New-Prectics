// var a = 1;
// do{
//     console.log(a + ") Wellcome");
//     a++;
// }while(a<=10)

// var a =1;
// while(a<=10){
//     console.log(a + ") Hello Abhishek");
//     a++;
// }

// for(var a=1; a<=10; a++){
//     if(a==3){
//         console.log(a + ": Hey Abhi");
//         // continue;
//         break;
//     }
//     console.log(a + ": Hello Abhishek");
// }

// var evensum = 0;
// var oddsum = 0;
// for (a = 1; a <= 10; a++) {
//   if (a % 2 == 0) {
//     evensum += a;
//   } else {
//     oddsum += a;
//   }
//   console.log(evensum);
//   console.log(oddsum);
// }


// for(var a=1; a<=100; a=a+10){
//     for(var b=a; b<a+10; b++){
//         console.log(b);
//     }
    
// }
// for(var a=1; a<=5; a++){
//     for(var b=1; b<=a; b++){
//         console.log(b);
//     }
//     console.log(" ");
// }

//!<--------------------------Multidimansional Arrar-------------------------->


var ary=[
    ["Abhishek", 23, "Male", "B.Tech"],
    ["Rahul", 22, "Male", "B.A"],
    ["Saini", 23, "Male", "Engi."]
    ];
    // console.log("<table border='1px' cellspacing='0'>");
   for(var a =0; a<ary.length; a++){
        // console.log("<tr>");
       for(var b= 0; b<ary[a].length; b++){
        //    console.log(ary[a][b] );
        }
        // console.log(" ");
   }
    // console.log("</table>");
    // ary.forEach((curElem, index, arr)=> {
    //     console.log(`${curElem} ${index}`);
    // })


    // var furits=["apple", "mango", "Orange"];

    // furits.forEach((curElem, index) => {
    //     // console.log(`${curElem} ${index}`);
    //     console.log(furits);
    // });
// //?<--------------------MAP in Array----------------->
    // furits.map((curElem, index)=>{
    //     console.log(`${curElem} ${index}`);
    // })

// const myarr= furits.map((curElem, index)=>{
//     return `${curElem} ${index}`;
// });

// console.log(myarr);



//!<-----------------Question----------->
//? Write a program to multiply each element with 2. 
// const number =[2,5,44,7,6,1];

// number.forEach((curElem)=>{
//     console.log(curElem*2);
// });

// const value = number.map((curElem)=> {
//     return curElem*2;
// });
// console.log(value);



//? find Index MEthod: the findIndex() method of Typedarray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no element satisfy the testing function, -1 is returned.

// let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let result = numbers.findIndex((curElem)=> {
//     return curElem > 5;
// });
// console.log(result);

//! filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.

// let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let res = numbers.filter((curElem)=> {
//     return curElem > 5;
// })
// console.log(res);

//? Ex. le'ts say user wants to delete value 6.

// let numbers= [1, 2, 3, 5, 4, 5, 6, 7, 5, 8, 9]
// const num = numbers.filter((curElem)=>{
//     return curElem !== 5;
// });
// console.log(num);


//? Filtering Products by price (in the Object)

const products=[
{ name: "Laptop", price: 1200},
{ name: "Tablet", price: 800},
{ name: "Mobile", price: 500},
{ name: "Smartwatch", price: 300},
{ name: "Earphone", price: 150},
];

//* Filter Products with a price less then or equal to 500

// const filterProducts = products.filter((curElem)=>{
//     return curElem.price <= 500;
//     // console.log(curElem.price<=800);
// });
// console.log(filterProducts);

//! Filter unique values

// const number=[1, 2, 5 ,4, 8, 7 ,62, 99, 8, 5, 99];

// let uniquevalues = number.filter((curElem, index, arr)=>{
//     // console.log(index);
//     return arr.indexOf(curElem)== index;
// });
// console.log(uniquevalues);

// console.log([...new Set(number)]);

//*==========================================
//* HOw to sort And Compare an Array
//*==========================================

//  const num=[1, 2, 55, 70, 4,151,  8, 7 ,62,5,  99,3, 8, 5, 99];


// num.sort();
// console.log(num);
// num.sort((a,b)=>{
//     if(a>b)return -1;
//     if(b>a)return 1;
// });
// console.log(num);

//! Using map to Square each number and create a new array

// const num = [1, 2, 3, 4, 5, 6];

//     const square = num.map((curElem) => curElem*curElem);
//     console.log(square);

//! using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.

// const word = ["apple", "orange", "lemon", "cucumber"];

// const res = word.map((curElem)=>curElem.toUpperCase());
// console.log(res);

//! Using the map method write a function that taken array of number and return a new array where each number is squared but only if it is an even number.

// const num = [1, 2, 3, 4, 5, 6];

// const square =num.map((curElem)=>{
//     if(curElem%2==0){
//         return curElem*curElem;
// }
// }).filter((curElem)=> curElem!= undefined);
// console.log(square);

//! using the map method write a function that taken array of name and returns a new array where each name is prefixed with with "Mr.".

// const names =["abhishek", "rahul"];
// const prefixedName = names.map((curName)=> `Mr. ${curName}`);

// console.log(prefixedName);

//!<---------------------lastIndexOf()------------------->
// const word = ["apple","lemon", "orange", "lemon", "cucumber"];
// var a= word.lastIndexOf("banana",2);
// console.log(a);

// var age = [10,40,17,25,15];

// var b= age.filter((age)=>age>=18);
// console.log(b);

var age = [10,40,17,25,15];

// age.valueOf(age);
// console.log(age);

// age.forEach((value)=>{
//     console.log(value*2);
// });