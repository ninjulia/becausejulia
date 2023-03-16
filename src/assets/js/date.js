////////////////////////////////Get year for copyright
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

//////////////////////////////////Get years in tech
const yearsExp = document.getElementById("myExp");
if (yearsExp) {
	yearsExp.innerHTML = currentYear - 2014 + "&nbsp;";
}
