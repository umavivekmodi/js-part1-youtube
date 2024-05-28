// const tinderUser= new Object()  //single ton object
// console.log(tinderUser);  // empty object

// const hexaUser = {}         // Non-single ton object   //f

// const hexaUser.id = "123abc"                             //a
// hexaUser.name ="sammy"                                   //l
// hexaUser.isLoggrdIn= false                               //s

// console.log(hexaUser);                               //e

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn= false
// console.log(tinderUser)
const regularUser ={
    email:"sammy@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a", 2 :"b"}
const obj2 = { 3:"a", 4 :"b"}
// const obj3 ={obj1 , obj2}
//  const obj3 = Object.assign(obj1,obj2)
//  const obj3 = Object.assign({ } ,obj1,obj2)  // { } its a optional perameter, it must use in the objects 
//  because there is onl two obj1, obj2 so its use in more object values like obj4 , obj5 ,obj6.....n
const obj3 = {...obj1,...obj2}    // ...(is a spread operator)
//  console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"ha@gmail.com"
    },
    {
        id:3,
        email:"han@gmail.com"
    },
]

users[1].email
/*console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));*/

// de-structureing
const course ={
    coursename: "js in hindi",
    prize :"999",
    courseInstructor : "hitesh"
}
// course.courseTnstructor
const{ courseInstructor: Instructor}= course
// console.log(courseInstructor);
console.log(Instructor);
//  react node topic object de-structureing
// const navbar =({company})=> {

// }
// navbar(company = "uumad")

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "prize" : "free"
// }
[
    {},
    {},
    {}
]

