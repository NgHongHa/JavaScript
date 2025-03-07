/**
 [D]rower [O]bject [M]odel

Document node toan bo tai lieu html
Element node dai dien cho 1 ptu
Text node  
Atrribute node

DOM API

getElementsByTagName
  */
let li_item = document.getElementsByTagName("li");
li_item[2].innerHTML = "thay doi bang tagname";
//getElementsByClassName
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);
li_class_item[0].innerHTML = "thay doi  bang inerhtml";
//getElementsByID
let chose = document.getElementById("list chose");
chose.innerHTML = "thay doi bang id";
