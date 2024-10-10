// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
    // Code here ;)
    console.log(text,char)
    let arr=[]
    if(text==""||char==""){
        return ''
    }
    for(i=0;i<text.length;i++){
        arr.push(char)
    }
    return arr.join("")
  }