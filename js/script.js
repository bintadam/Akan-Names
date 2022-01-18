function fetchvalue(){
  var dateOfBirth = document.getElementById('date').value;
  var yearOfBirth = document.getElementById('year').value;
  var monthOfBirth = document.getElementById('month').value;
  var gender = document.getElementById('gender').value;
   //console.log(dateOfBirth + yearOfBirth + monthOfBirth + gender);
  var dateInt = parseInt(dateOfBirth);
  var monthInt = parseInt(monthOfBirth);
  var yearInt = parseInt(yearOfBirth);
  var centuary = yearOfBirth.slice(0, 2);
  var bornYear = yearOfBirth.slice(2, 5);
  var cc = parseInt(centuary);
  var yy = parseInt(bornYear);
  console.log(centuary + " " + bornYear)
  validateValues(dateInt, monthInt, gender, cc, yy);
}


function validateValues(dateInt, monthInt, gender, cc, yy){
  if (dateInt <= 0 || dateInt > 31){
     alert("Give a valid date, Date should not be less than 0 or greater than 31");
     }else if (monthInt <= 0 ||monthInt > 12){
      alert("Give a valid month,Month should not be greater than 12 or less then 0")
     }else {
      dayOfTheWeek(dateInt, monthInt, gender, cc, yy);
     }
  }

     function dayOfTheWeek(dateInt, monthInt, gender, cc, yy){
         var bornDay = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(monthInt+1)/10))+dateInt)%7;
         var dayweek = parseInt(Math.floor(bornDay));
         console.log(dayweek);
         //alert(dayweek);
         finalOutPut(dayweek,gender);
  } 

function finalOutPut(dayweek, gender){
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
  var maleAkanNames = ["kwasi", "kwadmo", "kwabena", "kwaku", "yaw", "kofi","kwame"];
  var femaleAkanNames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];
  //alert(dayweek + " from final output method")
  
  if(dayweek == 1 && gender === "Male"){
    alert("you were born on " + week[0] + " and your akan name is " + maleAkanNames[0]);
  }else if (dayweek == 1 && gender === "Female"){
    alert("you were born on " + week[0] + " and your akan name is " + femaleAkanNames[0]);
  } else if (dayweek == 2 && gender === "Male"){
    alert("you were born on " + week[1] + " and your akan name is " + maleAkanNames[1]);

  }

}
  
