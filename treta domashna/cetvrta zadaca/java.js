function izlez(number1,number2)
{
    if(number1<10)
    {
        number1 = '0'+number1;
    }
    if(number2<10)
    {
        number2 = '0'+number2;
    }
    console.log(number1 +  ""+"Girls"+" "+number2+" "+"Boys");
}
var number1 = prompt("vnesete go prviot broj");
var number2 = prompt("vnesete go vtoriot broj");
izlez(number1,number2);