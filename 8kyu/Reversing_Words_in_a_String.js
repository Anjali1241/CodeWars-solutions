// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    //your code here
    const arr=string.split(" ")
    const reversedArr=[]
    for(let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i])
    }
    return reversedArr.join(" ")
  }