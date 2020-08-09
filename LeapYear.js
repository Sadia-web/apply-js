

function isLeapYear(year){
  if(year % 4 == 0 && year % 100 != 0){
    return "Leap Year"
  }
  else if (year % 400 == 0){
    return "Leap Year"
  }
  else{
    return "Is not Leap Year"
  }
}
var givenYear = isLeapYear(2000);
console.log(givenYear);

