// Explain what a callback function is and provide a simple example

function Array(arr, callback) {
    arr.push(100,200,300);
    callback();
  }
  
  let arr = [1, 2, 3, 4, 5];
  
  Array(arr, function() {
    console.log( arr);
  });