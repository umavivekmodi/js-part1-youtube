//Immediately Invoked Function Expression  (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){     //named IIFE
    console.log(`DB CONNECTED`);
})();  //some time globle scope created problems and to remove globle scope polutation we use => IIFE
//WHEN WE USE ARROW FUNCTION

((name) => {                        //UNnameIIFE
   console.log(`DB CONNECTED TWO ${name}`);
})('vivekModi');

( function aurcode() {
    console.log(`DB CONNECTED THREE`);
 })()

 