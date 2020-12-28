var a=prompt("koja zadaca sakate da ja vidite:","HERE");
if(a==1)
{
    var vrednost1="hello";
    var vrednost2=true;
    var vrednost3=20;
    alert ("ova e string");
    alert(vrednost1);
    alert ("ova e boolean");
    alert(vrednost2);
    alert ("ova e number");
    alert(vrednost3);
}
else if(a==2)
{
    var phones=30;
    var price=prompt("cenata na telefonot:","HERE");
    var tax=prompt("kolku e tax:","HERE");
    var total=phones*price;
    var taxs=total*tax;
    var totalwtax=total+taxs;
    alert("smetkata e:");
    alert(totalwtax);
}
else if(a==3)
{
     var p=3.14;
     var r=prompt("goleminata na radiusot:","HERE");
     var r2=r*2;
     var area=p*r2;
     alert("the area of the circle is :")
     alert(area);
}