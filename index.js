const name = document.getElementById("");
const name = document.getElementById("");
const name = document.getElementById("")

var femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" ,"Kofi", "Kwame" ]
var maleNames = ["Akosua", "Adwoa" ,"Abena" ,"Akua" ,"Yaa" ,"Afua" ,"Ama"]
var weekDays = ["Sundays", "Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
et dateString = '5/23/2014'  

// converting Date String to Javascript Date Format
let day = new Date(dateString).getDay();
let month = new Date(dateString).getMonth()
let year =  new Date(dateString).getFullYear()
let dayName;
switch(gender){
case "female" :
if (day ==0){
    dayName= 'Sunday'
}else if (day == 1){
    dayName= 'Monday'
}else if (day == 2){
    dayName= 'Tuesday'
}else if (day == 3){
    dayName= 'Wednesday'
}else if (day == 4){
    dayName= 'Thursday'
}else if (day ==5){
    dayName= 'Friday'
}else {
    dayName= 'Saturday'
}

console.log(`Day : ${dayName} Month: ${month+1} Year : ${year}`)