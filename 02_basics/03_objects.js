// Singleton  - declear by let nat a singleton but  declear by constroctor it's always singleton 


//Object.create          //singleton iske under hi singleton bnta hai

// object literals  - object ko declear krne ka tarika hai=> 
    const mysym = Symbol("key1")
const JsUser = {
    name : "hitesh",
    "Full name" : "hitesh Choudhary", 
    age : 18,
    [mysym] : "mykey",
    location: "jaipur",
    email : "umamodiv@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays :[ "Monday", "Saturday"] 
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
console.log( typeof JsUser[mysym])
console.log(JsUser[mysym])   //object ki value ko access = . se 
//  object ki value ko change krna=>
    JsUser.email = "umamodivivek@gmail.com"
console.log(JsUser["email"])
//object ko change na kr ske user uske liye freeze ka use kr skte hai
// Object.freeze(JsUser)
JsUser.email = "vivekuma@gmail.com"
console.log(JsUser["email"])
console.log(JsUser)
JsUser.greetings = function()
{
    console.log("Hello JS user");
}
JsUser.greetingstwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());





