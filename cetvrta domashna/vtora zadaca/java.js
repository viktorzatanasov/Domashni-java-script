function validenBroj(broj)
{
    return !isNaN(Number(broj))
}
function suma(niza)
{
    var sumaniza=0;
    var proverka=false;
    for(let i = 0;i<5;i++)
    {
        
        proverka = validenBroj(niza[i]);
        if(proverka==true){
        
        sumaniza+=Number(niza[i]);
        }
        else{
            return alert("netocna vrednost");
        }
    }
    return sumaniza;
}
var niza=[0,1,2,3,4];
for(let i=0;i<5;i++)
{
     niza[i]=prompt("enter the numbers"); 
}
var izlez = suma(niza);
alert("sumata na nizata broevi e"+" "+izlez);
