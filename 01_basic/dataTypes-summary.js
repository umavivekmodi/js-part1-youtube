// kis trh se memory me data ko rakha jata hai or access kiya jata hai usi aadhar pr 2 prakar ke data types divide kiye gye hai
// primitive or non - primitive 
//  Primitive  call by value -copy me change kiya jata reference me nahi 
// 7 types : string , Number , Boolean ,Null , undefined ,symbol, BigInt

const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol ('123')
const anotherId =  symbol('123')
//  console.log (id === anotherId);

//  const bigNumber = 32456787734578387484787348n

// reference type ( non- primitive)  direct memory me reference allocate kiya ja skta hai
// Array, Objects , Funcations

const heros = [ "shaktiman","naagraj", "doga"];
 let myObj = {
    name: "uma,
    age : 25 ,
}

 const myFuncation = funcation ( ) {
//  console.log( "hello world");
 }


 console.log( typeof outsideTemp);



 //  +++++++++++++++++++++++++++ MEMORY+++++++++++++++++++++++++++++++++++++++++

// Stack(primitive)  = variable declear kiya h uski copy milti h, 
// Heap (Non- primitive)= original value ka  reference means wo original value me change hoga

let myYouTubeName = "vivekmodidotcom"

let anotherName = myYouTubeName
anothername = "uvcode"

console.log(anotherName);
console.log(myYouTubeName);

let userone = {
    email: "user@google.com"
    UPI : "user@ybl"
}

let userTwo= userone
 
 userTwo.email = "umesh@gmail.com"

 console.log(userone.email);
 console.log(userTwo.email);

