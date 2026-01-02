// PUZZLE #1. SUM
// Assignment:

// Write a function named sum which performs addition in the way shown below:

// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
// NOTE: Pay attention that the last brackets are left empty to indicate the end of operations.

function sum(a) {
  if(num === undefined) return 0;
  let sum = a;

  return function inner(b) {
    if(b===undefined) return sum
    sum += b;
    return inner; 
  }
}
