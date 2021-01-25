let Book = {
    title : prompt("vnesete kniga"),
    author : prompt("vnesete go avtorot na knigata"),
    readingStatus : prompt("vnesete true ili false soodvetno ako ja imate procitano ili ne")
}
Book.output = function()
{
    if(this.readingStatus == "true")
    console.log(`Already read '${this.title}' by ${this.author}.`);
    else
    console.log(`You still need to read '${this.title}' by ${this.author}.`);
}
Book.output();