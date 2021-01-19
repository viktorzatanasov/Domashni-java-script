function izlez(first,last,brojNaStudenti)
{
    var izleznaNiza = [];
    for(let i =0;i<brojNaStudenti;i++)
    {
       izleznaNiza[i] = (i+1) + "." + first[i] + " " + last[i];
       
    }
    console.log(izleznaNiza);
}
var first = [];
var last = [];
var brojNaStudenti=prompt("kolku studenti ke vnesete?")
for(let i = 0 ; i<brojNaStudenti;i++)
{
    first[i] = prompt("Vnesete ime");
    last[i]= prompt("vnesete prezime");

}
izlez(first,last,brojNaStudenti);