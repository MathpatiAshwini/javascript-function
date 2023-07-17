let globalLet = "This is a global variable";
  
function fun() {
  let localLet = "This is a local variable";

  console.log(globalLet); 
  console.log(localLet);   
}
fun();