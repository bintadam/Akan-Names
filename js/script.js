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
function dayOfTheWeek(dateInt, monthInt, gender, cc, yy){
  var bornDay = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(monthInt+1)/10))+dateInt)%7;
  var dayweek = Math.floor(bornDayc)
  
} 
function finalOutPut(dayweek, gender){
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday",];
  var maleAkanNames = ["kwasi", "kwadmo", "kwabena", "kwaku", "yaw", "kofi","kwame"];
  var femaleAkanNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama",]
}  
