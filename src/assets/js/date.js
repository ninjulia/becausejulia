//////////////////////////////////Get Year for copyright date
const getDate = new Date();
let currentYear = getDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

//////////////////////////////////Get years in tech
let startYear = 2014;
console.log(currentYear - startYear);
