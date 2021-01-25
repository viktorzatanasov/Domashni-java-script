let Animal = {
    name : prompt("enter the name of the animal"),
    kind : prompt("enter the type of animal"),
}
Animal.speak = function(){
    console.log(`${Animal.kind} ${Animal.name} says:`,"Welcome home best friend");
}
Animal.speak();