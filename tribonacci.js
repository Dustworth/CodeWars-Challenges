function tribonacci(signature, n) {
  var fib_arr = []; // declare new array to store desired input
  if(n === 0) { return fib_arr; } // n is the desired length of our output; if n is 0, we return an empty array
  if(n < 4) { // and if n is 3 or less, then we return our root elements up to n
    for(var i = 0; i < n; ++i) { // loop over root elements
      fib_arr.push(signature[i]); // add them to output
    }
    return fib_arr; // finish
  }
  fib_arr = fib_arr.concat(signature); // add root elements to output. if we make it here, that means we have valid numbers and we will need to calculate n-3 new terms
  for(let i = 0; i < n-3; ++i) { // loop over our output array
    var next_in_seq = fib_arr[i] + fib_arr[i+1] + fib_arr[i+2]; // calculate next term
    fib_arr.push(next_in_seq); // add next term to output
  } 
  return fib_arr; // finish
}
// https://www.codewars.com/kata/tribonacci-sequence/javascript
