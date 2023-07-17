// let globalLet = "This is a global variable";;
  
// function fun() {
//    localLet = "This is a local variable";
// }

// fun();
//   console.log(globalLet); 
//   console.log(localLet);

let globalLet = "This is a global variable"
  
    function fun() {
      let globalLet = "This is a local variable"
      console.log(globalLet); 
    }
    fun();
    console.log(globalLet); 