var dateOfBirth = document.getElementById('day').value;
var yearOfBirth = document.getElementById('year').value;
var monthOfBirth = document.getElementById('month').value;
var gender = document.getElementById('gender').value;

var dateInt = parseInt(dateOfBirth);
var monthInt = parseInt(monthOfBirth);
var yearInt = parseInt(yearOfBirth);


validateValues();

   

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
