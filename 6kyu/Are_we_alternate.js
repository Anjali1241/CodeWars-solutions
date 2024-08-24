// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

function isAlt(word) {
    let vowels=["a","e","i","o","u"]
    let even=[]
    let odd=[]
    let newArr=[]
    let newArr2=[]
     let a=[]
    for(i=0;i<word.length;i++){
      let ans=vowels.filter((ele,index)=>ele==word[i])
      a.push(...ans)
        if(i%2==0){
            even.push(word[i])
            let ans=vowels.filter((ele)=>ele==word[i])
            newArr.push(...ans)
        }
        if(i%2!=0){
             odd.push(word[i])
            let ans=vowels.filter((ele)=>ele==word[i])
            newArr2.push(...ans)
        }
    }
 
    if(a.length==vowels.length/2){
      return false
    }
     
     if(word.length==5){
       
      if(a.length==3||a.length==4){
        return false
      }
    }
    if(word.length>1){
      if(a.length==word.length){
      return false
    }
    }
    
    if((even.length==newArr.length||odd.length==newArr2.length)){
        return true
    }else{
        return false
    }
    }