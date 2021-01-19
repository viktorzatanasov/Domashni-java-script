function funkcija(vlez){
    var type = typeof (vlez);
    if(type==="Boolean"){
    return type= "vlezot e boolean";}
    else if (type==="Object"){
    return type="vlezot e object";}
    else if(type=== "Number"){
    return type = "vlezot e number";}
    else if(type==="String"){
    return type ="vlezot e string";}
    else if(type==="Undefined"){
    return type="vlezot e undefined";}
}
for(let i = 0 ; i<5 ; i++)
{
    var vlez = prompt("vnesete vrednost");
    let izlez = funkcija(vlez);
    console.log(izlez);
}