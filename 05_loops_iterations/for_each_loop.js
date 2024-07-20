const coding = ["js","ruby","java","pythen","cpp"]

// coding.forEach(function (item) {
//     console.log(item)
// })
// by arrow function
// coding.forEach((item)=>{
//     console.log(item)
// })
//by declearing function
function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item ,index ,arr)=>{
    // console.log(item,index,arr);
    // console.log(`this is item ${item}, this is index ${index},this is an arr ${arr}`);
})


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName :"js"
    },
    {
        languageName: "java",
        languageFileName :"java"
    },
    {
        languageName: "python",
        languageFileName :"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})