const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (accumulator, currentValue){
    // console.log(`accumulator: ${accumulator}, and currentValue:  ${currentValue}`);
//     return accumulator + currentValue
//  }, 0  )
//  console.log(myTotal);

// reduce in arrow function
//  const myTotal = myNums.reduce((acc , curval) => acc + curval, 0)


//  console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        prize : 2999
    },
    {
        itemName: "Python course",
        prize : 4999
    },
    {
        itemName: "CPP course",
        prize : 1999
    },
    {
        itemName: "Java course",
        prize : 3599
    },
 ]

 const PrizeToPay = shoppingCart.reduce((acc,item) => acc + item.prize,0)
 console.log(PrizeToPay);