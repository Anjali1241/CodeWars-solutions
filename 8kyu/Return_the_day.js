// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 

    // put your code here
    if(num>0&&num<=7){
      if(num==1){
    return "Sunday"
  }
  if(num==2){
    return "Monday"
  }
  if(num==3){
    return "Tuesday"
  }
  if(num==4){
    return "Wednesday"
  }if(num==5){
    return "Thursday"
  }if(num==6){
    return "Friday"
  }
  return "Saturday"
    }else{
      return 'Wrong, please enter a number between 1 and 7'
    }
  
  }