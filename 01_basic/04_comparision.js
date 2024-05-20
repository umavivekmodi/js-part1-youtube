// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);
 

//these type of conversion create confusion condition state of us soo please avoide,
//   anotherthen you got consolelog to see the output...
console.log(null>0);
console.log(null==0);  //comparision and equality check both are diffrent from eachother.
console.log(null>=0);  //Here is result true because its valueconversion..........
//the reason is that equality check == and comparision > < >= <= work differently. 
//comparsions convert null to a number.  treating it as 0.
//that's why (3) null >=0 is true and (1)null > 0 is false.

console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);
 
//=== (strict check) check the values and also strickly check (dataType) the values.

console.log( "2"=== 2);  //both are diffrent because both dataTypes are diffrent....
