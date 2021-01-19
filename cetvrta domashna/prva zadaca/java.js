function tellStory(niza)
{
    var zaPrintanje=("This is"+" "+ niza[0]+"."+" "+ niza[0]+" "+ "is a nice person. Today they are"+" "+ niza[1]+"."+" "+ "They are"+" "+ niza[2]+" "+" all day. The end.");
    return zaPrintanje;
}
var niza=[0,1,2];
for(let i=0;i<3;i++)
{
     niza[i]=prompt("enter the name/mood/activity in order"); 
}

var izlez=tellStory(niza);
alert(izlez);