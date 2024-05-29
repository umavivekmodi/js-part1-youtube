
// {} is actualy scope its use in function and if else condition its called scope 
// but when its comes object its call object decleartion 
// var c = 300         //globle scope
let a =300
if(true){               //b
    let a = 10          //l
    const b = 20        //o
    // var c = 30          //c
    // console.log("inner: ", a);
}                       //k scope    block scope  => scope k undr wali value bahe nahi jani chahiye

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope
function one(){
    const username = "hitesh"
    function two (){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if (true){
    const username = "hitesh"
    if(username === "hitesh")
        {
        website=" Youtube"
        // console.log( username + website);

    }
    // console.log(website);           //here is not show error but sir say it creates a error 
}
// console.log(username);

//+++++++++++++++++++++++ intrusting ++++++++++++++++++++++++++++++++++++
console.log(addone (5))
function addone(num){
    return num +1

}
// console.log(addone (5))



// addtwo(5)
const addtwo = function(num){
    return num + 2
}
// addtwo(5)
