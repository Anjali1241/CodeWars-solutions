// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
    let LowerCaseStr=str.toLowerCase()
    let xEle=LowerCaseStr.split("").filter((ele)=>ele=="x")
     let oEle=LowerCaseStr.split("").filter((ele)=>ele=="o")
    return xEle.length==oEle.length?true:false
}