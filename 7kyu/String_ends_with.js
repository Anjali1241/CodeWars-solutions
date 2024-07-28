// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abc', '')
function solution(str, ending){
    let var1=str.substr(-1*ending.length)
    if(ending==""){
      return true
    }
    return var1==ending?true:false
  }