// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// solution
function reverseWords(str) {
    // Go for it
    let arr = str.split(" ")
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split("").reverse().join(""))
    }
    return newArr ? .join(' ')
}