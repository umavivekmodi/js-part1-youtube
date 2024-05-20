const name = "Uma"
const repoCount = 50

// console.log(name + repoCount+ "value"); // outdated syntex

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);

const gameName = new String ('umaModi-vm');

// console.log (gameName[0]);
// console.log (gameName.__proto__);  //important syntax

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));  // here we pass a number not a char.   charAt   function
// console.log(gameName.indexOf('v'));   // here we pass a char not a number.    indexOf  function


 const newString = gameName.substring(0,4)  //last value means 4 is not included in the result.
 console.log(newString);

 const anotherString = gameName.slice(-8,4) //we gave - negative value in this at its starts reverce
 console.log(anotherString);

 const newStringOne = "    UmaModi   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))







