var broevi = [1,2,3,4,5,6,7];

    var div = document.getElementById('container');
    var ul=document.createElement('ul');
    for(i=0;i<broevi.length;i++)
    {
        var li=document.createElement('li');
        li.innerHTML=broevi[i];
        ul.appendChild(li);
    }
    div.appendChild(ul);
    var ravenka = document.createElement('P1');
    ravenka.appendChild(document.createTextNode("(1+2+3+4+5+6+7)=28"));//ako gi vnesuvav dinamicki bi bilo broevi[0]+broevi[1]+....?
    document.body.appendChild(ravenka);