document.getElementById("myTitle").innerText = "Header changed!";
document.getElementsByClassName("paragraph")[0].innerHTML = "Paragraph changed!";
document.getElementsByClassName("paragraph second")[0].innerText = "Paragraph changed!";
let items = document.getElementsByTagName("div")[2];
let headerlastdiv = items.firstElementChild;
headerlastdiv.innerText = "Header changed";
let paragraphlastdiv = items.lastElementChild;
paragraphlastdiv.innerText = "Paragraph changed!";