
// function SayMyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }
// SayMyName()

// function addTwoNumbers(number1 , number2)   // when function is define its a =>perameters
// {
//        console.log(number1 + number2);
// }
function addTwoNumbers(number1 , number2)   // when function is define its a =>perameters
{
//        let result = number1 + number2
//        return result
        return number1 + number2
}
 const result = addTwoNumbers(3,5)           // when function call its an => arguments

// console.log("Result:" , result);

function loginusermassage (userName = "vivek"){
        // if(userName===undefined)
        if(!userName)

                {
                // console.log("please enter a userName");
                return
}
return`${userName} just logged in`
}
// console.log(loginusermassage("hitesh"))
// console.log(loginusermassage(""))
// console.log(loginusermassage())
// console.log(loginusermassage("uma"))


function calculateCartPrize(val1,val2, ...num1){  // rest operator or spread operator here its works like a rest operator
        return num1
}
//  console.log(calculateCartPrize(200,400,500, 2000))
const user ={
        username : "hitesh",
        prize :199
}
function handleObjct(anyObject){
        console.log(`user name is ${anyObject.username} and prize is ${anyObject.prize}`)

}
handleObjct(user)
handleObjct ({
        username:"vivek",
        prize : 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
        return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));




