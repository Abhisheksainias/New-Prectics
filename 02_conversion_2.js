
// == or <> operater are use and work  different way in javaScript 

//  this type of conversion creating confusion
console.log(null > 0); 
console.log(null == 0); 
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this compersion check datatype then comparsion

console.log(2 === "2"); 