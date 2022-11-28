//////////////////////////////////Get Year for copyright date
const getDate = new Date();
let currentYear = getDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

//////////////////////////////////Get years in tech
const yearsExp = document.getElementById("myExp");
if (yearsExp) {
	yearsExp.innerHTML = currentYear - 2014 + "&nbsp;";
}
