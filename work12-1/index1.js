let year = new Date().getFullYear()
document.getElementById("cal").innerHTML = calendar(year)
function setCalendar(year){
    for (var i=-year;i<year.length;i++){
        yearObj = document.createElement("option");
		yearObj.innerHTML =parseInt(nowDay.getFullYear())+i;
		yearObj.value =parseInt(nowDay.getFullYear())+i;	
		$("setYear").appendChild(yearObj);
    }
}