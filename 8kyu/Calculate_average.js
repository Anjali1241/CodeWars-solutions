// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if(array.length==0){
      return 0
    }
    // your code here
    let arr=array.reduce((acc,curVal)=>acc+curVal,0)
    
    return arr/array.length;
  }