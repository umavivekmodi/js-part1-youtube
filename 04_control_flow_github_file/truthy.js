const userEmail =  "h@hitesh.ai"

// if(userEmail){
//     console.log("got user Email");
// }
// else {
//     console.log("don't have user Email");
// }

// falsy value
// false , 0 ,-0 , bigInt 0n, "" , null , undefined , NaN

// truethy value

// [] , true , "0" , 'false' , " " , {} , function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }
const emptyobj = {
}
if(Object.keys(emptyobj).length===0){
    // console.log("object is empty");

    // Nullish coalescing operator (??)  : null undefined   its a fall back 

    let val1;
    // val1 = 5 ?? 10
    // val1 = null ?? 10
    // val1= null ?? undefined
    // val1 = undefined ?? 15
    val1 = null ?? 10 ?? 15

    // console.log(val1);

}


// terniary operator 

// condition ? true : false 

const iceTeaPrize = 100
iceTeaPrize <= 80 ? console.log("less then 80"):console.log("more then 80")