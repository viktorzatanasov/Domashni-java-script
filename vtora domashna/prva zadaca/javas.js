var broj1= prompt("vnesete go prviot broj","HERE");
var broj2= prompt("vnesete go vtoriot broj","HERE");
var broj3= prompt("vnesete go tretiot broj","HERE");
var broj4= prompt("vnesete go cetvrtiot broj","HERE");
var broj5= prompt("vnesete go petiot broj","HERE");
var minimum = 0;
if(broj1 < broj2 && broj1 < broj3 && broj1 < broj4 & broj1 < broj5)
{
    minimum==broj1;
}
else if(broj2 < broj1 && broj2 < broj3 && broj2 < broj4 & broj2 < broj5)
{
    minimum==broj2;
}
else if(broj3 < broj1 && broj3 < broj2 && broj3 < broj4 & broj3 < broj5)
{
    minimum==broj3;
}
else if(broj4 < broj1 && broj4 < broj2 && broj4 < broj3 & broj4 < broj5)
{
    minimum==broj4;
}
else if(broj5 < broj1 && broj5 < broj2 && broj5 < broj3 & broj5 < broj4)
{
    minimum==broj5;
}
alert("najmamilot broj e:" + "" + minimum);