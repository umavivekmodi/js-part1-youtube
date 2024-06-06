const user = {
    username : "hitesh",
    prize : 999 ,
    welcomeMassage : function () 
{
        console.log(`${this.username},welcome to website`)  // this  refers to => current content 
        // console.log(this);
    }
}
// user.welcomeMassage()
// user.username = "vivekModi"
// user.welcomeMassage()

// console.log(this);

// function chai (){
//     let username = "umaModi" // this is not worked in => function => its only worked in objects
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
//  const chai = ()=> {
//     let username = "hitesh"
//     console.log(this.username);
//  }
//  chai()
const chai = ()=> {
    let username = "hitesh"
    console.log(this);
 }
//  chai()
  
//+++++++++++++++ arrow function +++++++++++++++++++
() => {}  // explisit return 
// const addTwo = (num1,num2) =>     // when we use curly braces  =>  use return keyword
//      {
//     return num1 + num2
// }


//impilsit return == 
// const addTwo = (num1 , num2) => num1 + num2    
//const addTwo = (num1 , num2) => (num1 + num2)       // when we use pernthisis  => not use return keyword
// const addTwo = (num1 , num2) => {username: "umaModi"}   // THIS SIDE WE DONT RETURN OBJECT BECAUSE WE DONT USE PERENTHISIS()
const addTwo = (num1 , num2) => ({username:"umaModi"})  


console.log(addTwo( 3, 4))

// const myArray = [2,,8,9,7,6]
// myArray.forEach(function(){})

// myArray.forEach(()=>{})
// myArray.forEach(()=>())



