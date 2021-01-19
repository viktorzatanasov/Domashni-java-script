function weightInChickens(kilaza)
{
    var convertion = kilaza *0.5;
    return convertion;
}
var kilaza =prompt("kolku kilogrami imate?");
var izlez = weightInChickens(kilaza);
let items = document.getElementsByTagName("div")[0];
let p = items.firstElementChild;
p.innerText = izlez;