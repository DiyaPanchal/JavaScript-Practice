//Q1

let newBtn = document.createElement("button");
newBtn.innerText="Click me!";

newBtn.style.backgroundColor="red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Q2

let paragraph = document.querySelector(".class");
// paragraph.setAttribute("class","newClass"); //This overwrite the existing class
// console.log(paragraph.classList); //1

paragraph.classList.add("newClass");

console.log(paragraph.classList); //2