//array  
//()parenthisis  , []bracktes , {} braces , curly braces
const myArr= [0,1,2,3,4,5]
const myHeros= ["shaktiman", "naagraj"]
const myArr2 = new Array (1,2,3,4,5)
console.log(myArr[1]);

//Array methods

// myArr.push(6)  // push se array me value add krte hai    vs   pop me array ki last value remove kr dete hai
// myArr.push(7)
// myArr.pop()
// myArr.unshift(10)  //unshift se value start me add kr skte hai
// myArr.shift()  //shift se unshift wali value ko remove kr skte hai  oe 0 ko bhi remove kr deta hai

// console.log(myArr);
// // console.log(myArr.includes(9));  // ask 9 is in the array or not  and its shos result in boolean value == true or false
// // console.log(myArr.indexOf(3));  //  its show the index value if value is present 
//  const newArr = myArr.join()  // join bind our array and converts into string
//  console.log(myArr);
//  console.log(newArr);


//  slice ,splice 
console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //ye original array lo manipulate krta hai

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  //ye original array ko manipulate nahi krta hai  means slice wala protation he change ho jata hai 
// console.log(myn1);
console.log("C", myArr);

console.log(myn2);







