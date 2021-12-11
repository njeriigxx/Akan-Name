const yearOfBirth = document.getElementById("Year of Birth"); 
const dateOfBirth = document.getElementById("Date of Birth");
const monthOfBirth = document.getElementById("Month of Birth")
const gender = document.getElementById("Gender")
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    // if (name.value === '' || name.value == null) {
    //   messages.push('Name is required')
    // }
  
    if (yearOfBirth.value === ''  || yearOfBirth.value == null ) {
      messages.push('Year of Birth is require')
    }
  
    if (monthOfBirth.value  === '' || monthOfBirth.value  == null ) {
      messages.push('Month of Birth is required')
    }
  
    if (dateOfBirth.value.length === '' || dateOfBirth.value == null ) {
      messages.push('Date of Birth is required')
    }
    if (gender.value === "female/male"  || gender.value == null ){
        messages.push("You must select either male or female");
    
    }
})
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
var gender = ["female" ,"male"]
var maleNames = ["Akosua", "Adwoa" ,"Abena" ,"Akua" ,"Yaa" ,"Afua" ,"Ama"]
var femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" ,"Kofi", "Kwame" ]
var weekDays = ["Sundays", "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
console.log()

let dateString = '5/23/2014'  

// converting Date String to Javascript Date Format
let day = new Date(dateString).getDay();
let month = new Date(dateString).getMonth()
let year =  new Date(dateString).getFullYear()
let dayName;
switch(gender){
case "female" :
if (day ==0){
    alert('Hello! You were born on Sunday and your name is Akosua. Akosua means Agile!');
}else if (day == 1){
    alert(' Hello! You were born on Monday and your name is Adwao. Adwao means Peaceful!');
}else if (day == 2){
    alert('Hello! You were born on Tuesday and your name is Abena. Abena means Friendly!');
}else if (day == 3){
    alert('Hello! You were born on Wednesday and your name is Akua. Akua means Stubborn!');
}else if (day == 4){
     alert(' Hello! You were born on Thursday and your name is Yaa. Yaa means Brave!');
}else if (day ==5){
     alert(' Hello! You were born on Friday and your name is Afua. Afua means Wanderer!');
}else {
    alert('Hello! You were born on Saturday and your name is Ama. Ama means Creative!');
}
break ;
case "male" :
if (day ==0){
    alert('Hello! You were born on Sunday and your name is Kwasi. Kwasi means Agile!');
}else if (day == 1){
    alert(' Hello! You were born on Monday and your name is Kwadwo. Kwadwo means Peaceful!');
}else if (day == 2){
    alert('Hello! You were born on Tuesday and your name is Kwabena. Kwabena means Friendly!');
}else if (day == 3){
    alert('Hello! You were born on Wednesday and your name is Kwaku. Kwaku means Stubborn!');
}else if (day == 4){
     alert(' Hello! You were born on Thursday and your name is Yaw. Yaw means Brave!');
}else if (day ==5){
     alert(' Hello! You were born on Friday and your name is Kofi. Kofi means Wanderer!');
}else {
    alert('Hello! You were born on Saturday and your name is Kwame. Kwame means Combative!');
}
default:
break;
   }

console.log(`Day : ${dayName} Month: ${month+1} Year : ${year}`)