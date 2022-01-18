var dateOfBirth = document.getElementById('day').value;
var yearOfBirth = document.getElementById('year').value;
var monthOfBirth = document.getElementById('month').value;
var gender = document.getElementById('gender').value;

var dateInt = parseInt(dateOfBirth);
var monthInt = parseInt(monthOfBirth);
var yearInt = parseInt(yearOfBirth);
var centuary = yearOfBirth.slice(0, 2);
var bornYear = yearOfBirth.slice(2, 5);
var cc = parseInt(centuary);
var yy = parseInt(bornYear);
console.log(centuary + "" + bornYear)
validateValues(dateInt, monthInt,gender, cc, yy)


function validateValues(dateInt, monthInt, yearInt, gender, cc, yy){
if (dateInt <= 0 || dateInt > 31){
  alert("Give a valid date");
 }else if (monthInt <=o ||monthInt > 12){
   alert("Give a valid month")
 }else {
   dayOfWeek(dateInt, monthInt, yearInt, gender)
 }

}   

/* arrays of the days of the week*/
let daysOfTheWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
] 


/* arrays of the female akan name*/
  let femaleAkanNames =[
  "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama",  
  ]
  /* arrays of the male akan name */
  let maleAkanNames =[
  "kwasi", "kwadko", "kwabena", "kwaku", "yaw", "kofi", "kwame",
  ]
  
  if(gender=="male"){
    alert("your akan name is " + maleAkanNames[dayOfWeek])
  }else if( gender== "female"){
    alert("your akan name is " + femaleAkanNames[dayOfWeek])
  }else{
    alert("invalid")
  }
