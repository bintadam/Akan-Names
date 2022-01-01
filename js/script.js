function day(){
  let day = document.getElementById("day-of-birth").value;
  let month = document.getElementById("month-of-birth").value;
  let year = document.getElementById("year-of-birth").value;
  let gender = document.getElementById("gender").value;
  console.log(day);
  console.log(month);
  console.log(year);
  console.log(gender);

  /* arrays of the female akan name*/
  let femaleAkanNames =[
  "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama",  
  ]
  /* arrays of the male akan name */
  let maleAkanNames =[
  "kwasi", "kwadko", "kwabena", "kwaku", "yaw", "kofi", "kwame",

var dob = month + " " + day + ", " + year;
var then = new Date(dob);
var theday = then.getDay()+1;
var date=then.getDate();
var year=then.getYear();
if (year<100) year="19" + then.getYear();
var weekday = new Array(6);
weekday[1]="Sunday";
weekday[2]="Monday";
weekday[3]="Tuesday";
weekday[4]="Wednesday";
weekday[5]="Thursday";
weekday[6]="Friday";
weekday[7]="Saturday";
if (day != date) alert("Sorry!  That appears to be an invalid date!");
else {
dayborn = weekday[theday];
dob = dayborn + ", " + month + " " + date + ", " + year + ".";
alert("You were born on " + dob);
   }





}