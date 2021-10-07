
function clearScreen() {
 document.getElementById("displayresults").value = "";
}


function display(value) {
 document.getElementById("displayresults").value += value;
}


function calculate() {
 var p = document.getElementById("displayresults").value;
 var q = eval(p);
 document.getElementById("displayresults").value = q;
}