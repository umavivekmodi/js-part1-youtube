// if statement


// const isUserLoggedIn = true
// const temperature = 45


// if( temperature < 50 ){
//  console.log("less the 50");
// }
// else{
// console.log(" temperature greater the 50");
// }

// console.log("temperature is 45");
//< = less then  , > = greater then  ,  <= greater then equal ,  >=less then equal  , == double equal to check equality ,
// != not equal for negative check ,  === check type the data and VALUE  , !==


// const score = 200
// if ( score >100){
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//short hand notation   inpilsid scope 

// const balance = 1000
// if ( balance > 500 ) console.log("test");  // it executed singal line   // dont do its not a good practice

// nesting  for check multipal condition

// if (balance<500)
// { 
// console.log("less then 500")
// } 
// else if (balance<750)
//     {
//         console.log( "less then 750")
//     }
//     else if(balance < 900){
//         console.log("less then 900")
//     }
//     else{
//         console.log("less then 1200")
//     }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2!=3){
    console.log("allow to buy courses")

}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ")
}


