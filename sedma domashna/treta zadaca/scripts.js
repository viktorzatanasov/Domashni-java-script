class Student
{
    name 
    lastName
    age 

}
function Add()
{
        Student.name = document.getElementById("fname");
        Student.lastname = document.getElementById("lname");
        Student.age = document.getElementById("Age");
        
    
    
    let listItem = document.createElement("li");
    let valueStudent = Student.addToArray();
    listItem.appendChild(valueStudent);
    document.getElementById("Lista").appendChild(listItem);
      
}
Student.addToArray = function()
{
     
     return Student.name.innerText +" "+ Student.lastname.innerText+ " " + Student.age.innerText;
}
