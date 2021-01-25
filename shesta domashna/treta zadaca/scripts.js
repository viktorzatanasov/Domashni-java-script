function Submit(){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var Pass = document.getElementById("Pass").value;
    var Mail = document.getElementById("Mail").value;
    var niza = addToArray(fName,lName,Pass,Mail);
    document.getElementById("Print").innerHTML = niza;
    
   
}
function addToArray(fName,lName,Pass,Mail)
{
    var niza = [];
   niza.push(fName,lName,Pass,Mail);
   return niza;
}