function ATM(baranje,sumaNaSmetka)
{
      alert("Ve molime pocekajte");
      if(baranje>sumaNaSmetka)
      {
          alert("Nemate dovolno pari");
      }
      else 
      {
          sumaNaSmetka-=baranje;
          alert("Zemete gi vashite pari od aparatot \nIzvadena suma na pari:"+baranje+"\nOstanata suma na pari:"+sumaNaSmetka);
      }
}

var baranje=prompt("kolku pari sakate da povlecete");
var sumaNaSmetka= 10000;
ATM(baranje,sumaNaSmetka);