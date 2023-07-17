// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//       b = i % 5 == 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//   }


for (var i=1; i<=100; i++){
    if (i%3==0){
        console.log("fizz");
    
    }
    if (i%5===0){
        console.log("buzz");
    
    }
    if (i%3===0 && i%5===0){
        console.log("fizzbuz");
        
    }

    else{
        console.log(i);
    
    }

}
  