function myButtonClick(){
    let fName = document.getElementsByTagName("input")[0].value;
    let lName = document.getElementsByTagName("input")[1].value;
    document.getElementById("content").innerText = `Greetings ${fName} ${lName}`;
}
function myDivMouseOver()
{
    document.getElementById("content").innerText = " ";
}
let myButton = document.getElementsByTagName("input")[2];
myButton.onclick = myButtonClick;
let myDiv = document.getElementById("content");
myDiv.onmouseover = myDivMouseOver;