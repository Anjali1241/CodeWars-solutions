// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    let arr=string.split("")
    let arr2=[]
    for(let i=0;i<string.length;i++){
        if(string[i].charCodeAt(0)>=65 && string[i].charCodeAt(0)<97){
            arr2.push(i)
        }
    }
    for(let i=0;i<arr2.length;i++){
        arr.splice(arr2[i]+i,0," ")
    }
  return arr.join("");
}
