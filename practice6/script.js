// console.log("Hello");
// console.log(window.document);
// console.dir(window.document);
// console.dir(document); //same
// console.dir(document.body.childNodes[1]); //same

// document.body.style.background='pink';
// document.body.childNodes[1].innerText = "abc";

//Q1
let heading = document.querySelector("h2").innerText;

heading = heading + " from Apna College students";
console.dir(heading);

//Q2
let divs = document.querySelectorAll(".box");
console.log(divs); //NodeList

divs[0].innerText = "unique value";
divs[1].innerText = "unique value1";
divs[2].innerText = "unique value2";

//or
let idx = 1;
for(div of divs){
    div.innerText =`new unique value $(idx)`;
    idx++;
}