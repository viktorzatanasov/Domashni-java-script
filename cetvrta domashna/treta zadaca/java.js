function izlez(niza)
{
    var izleznaPromenliva = 0;
   izleznaPromenliva = niza.join(" ");
    return izleznaPromenliva;
}
var niza=[0,1,2,3,4,5,6];
for(let i=0;i<7;i++)
{
     niza[i]=prompt("input the array"); 
}
var output=izlez(niza);
alert(output);