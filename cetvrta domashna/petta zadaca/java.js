function MinMaxSum(niza)
{
    var min =99999 ;
       var max = 0;
   for(let i = 0 ; i < niza.length; i++)
   {
       
       niza[i] = Number(niza[i]);
       
          if(niza[i]>max)  
          {
              max = niza[i];
              
          }
           if(niza[i]<min)
          {
              min = niza[i];
          }
      
   }
   var suma = min + max ;
   alert("Min:"+" "+min+" "+"Max:"+" "+max+" "+"Suma:"+" "+suma);
}
var niza=[0,0,0,0,0,0];
for(let i = 0 ;i<6;i++)
{
    niza[i] = prompt("vnesete vrednosti za nizata");
}
MinMaxSum(niza);