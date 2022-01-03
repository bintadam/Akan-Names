function date(){
  let day = parseInt(document.getElementById("day-of-birth").value);
  let month = parseInt(document.getElementById("month-of-birth").value);
  let year = parseInt(document.getElementById("year-of-birth").value);
  let gender;

  if(document.getElementById("male").checked == true){
    gender = "male"
  }else if(document.getElementById("female").checked == true){
    gender = "female"
  }
   var centuary = parseInt(year.toString().substring(0, 2) + 1
   

  /* arrays of the female akan name*/
  let femaleAkanNames =[
  "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama",  
  ]
  /* arrays of the male akan name */
  let maleAkanNames =[
  "kwasi", "kwadko", "kwabena", "kwaku", "yaw", "kofi", "kwame",
  ]
  
}