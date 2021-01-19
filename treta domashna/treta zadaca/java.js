function godini(covekVoKuce,kuceVoCovek)
{
    if(covekVoKuce>0)
    {
       return covekVoKuce = covekVoKuce/7;
    }
    else if (kuceVoCovek>0)
    {
     return kuceVoCovek = kuceVoCovek*7;
    }
}
var opredelenost=prompt("za shto sakate da presmetate kuce vo covek ili covek vo kuce?");
if(opredelenost == "covek vo kuce"){
var covekVoKuce = prompt("kolku godini imate");
var kuceVoCovek=0;
}
else{
var kuceVoCovek = prompt("kolku godini ima kuceto");
var covekVoKuce =0;
}
var izlez = godini(covekVoKuce,kuceVoCovek);
alert("Your"+" "+"dog's"+" "+ "age"+" "+ "is"+ " "+izlez+" "+ "years."+" " +izlez+" "+ "is"+" "+ "the"+" "+ "calculated"+" "+ "age");
