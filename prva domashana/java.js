var a=prompt("koja zadaca sakate da ja vidite:","HERE");
var flag = 0;
 if(a<1 || a>3 || typeof a === String)
{
    alert("vnesovte pogreshen input probajte povtorno");
    flag = 1;
}
if(flag==1){
    var b=prompt("koja zadaca sakate da ja vidite:","HERE");
 if(b==1)
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
else if(b==2)
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
else if(b==3)
{
     var p=3.14;
     var r=prompt("goleminata na radiusot:","HERE");
     var r2=r*2;
     var area=p*r2;
     alert("the area of the circle is :")
     alert(area);
}
}
else {
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
    
}
