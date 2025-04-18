// DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
    let uniqueValues=numList.filter((ele,index)=>numList.indexOf(ele)==index&& numList.lastIndexOf(ele) === index)
    let sum=uniqueValues.reduce((acc,curValue)=>acc+curValue,0)
   
    return sum;
}