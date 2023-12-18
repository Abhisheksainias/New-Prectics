const name = "Abhishek";
const repoCount = 40;

//console.log(name + repoCount + "value");  this is old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`abhishek-as-com`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(-12, 9)
console.log(anotherString);

const newStringOne = "    abhi     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="htpps://abhishek.com/abhishek%20saini"

console.log(url.replace('%20', '-'));


console.log(url.includes('abhishek'));
console.log(url.includes('swapnil'));

console.log(gameName.localeCompare(newStringOne));