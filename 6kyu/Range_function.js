// DESCRIPTION:
// Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

// Examples:

// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

function range(...arr){
    let oneArgArr=[]
    if(arr.length==1){
    for(i=1;i<=arr[0];i++){
        oneArgArr.push(i)
    }
      return oneArgArr
    
    }
    if(arr.length<=2){
        for(i=arr[0];i<=arr[1];i++){
        oneArgArr.push(i)
    }
      return oneArgArr
   
    }
      if(arr.length<=3){
         console.log(arr.length)
        for(i=arr[0];i<=arr[2];i+=arr[1]){
        oneArgArr.push(i)
    }
        return oneArgArr
  
    }
  return oneArgArr
}