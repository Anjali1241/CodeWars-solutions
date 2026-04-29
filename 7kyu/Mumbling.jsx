// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
	let arr=[]
	for(let i=0;i<s.length;i++){
	    let innerArr=[]
	    for(let y=0;y<i+1;y++){
	        if(y==0){
	            
	        innerArr.push(s[i].toUpperCase())
	        }else{
	            innerArr.push(s[i].toLowerCase())
	        }
	    }
	    arr.push(innerArr.join(""))
	}
    return arr.join("-");
}
