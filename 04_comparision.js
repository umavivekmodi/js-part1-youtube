// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2"> 1 );
// console.log("02"> 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // the reason is that an equality check == and omparisons > < >= <= work diffrently.
// comparisons convert null to a number ,  treating it as 0. that's why (3) null >= is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); // all gives you false answer
/*is tarh k compArision ko avoid he krte hai kyuki ye hume kbhi bhi confusion me daal skte hai
clean code ki sbse jyada value hai or usi ko huma sbse jyada priority dete hai */ 
//  comparision and equality check both are diffrent 

// ===     strict check values to strictly check (data type) karta hai
console.log("2" === 2);




