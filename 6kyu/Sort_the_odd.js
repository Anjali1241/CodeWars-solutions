// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.
    let newArr = array.map(ele => {
      if (ele % 2 === 0) {
        return ele;
      }
      return "#";
    });
  
    // Sort only the odd numbers.
    let oddArrSort = array.filter(ele => ele % 2 !== 0).sort((a, b) => a - b);
  
    // Place the sorted odd numbers back into the newArr.
    let oddIndex = 0;
    let finalArr = newArr.map(ele => {
      if (ele === "#") {
        return oddArrSort[oddIndex++];
      }
      return ele;
    });
  
    console.log(finalArr); // Output the final array
    return finalArr; 
  }