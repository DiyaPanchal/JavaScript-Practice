let modeButton = document.querySelector("button");
let currMode = "light";

modeButton.addEventListener("click",() =>{
    if(currMode === "light"){
        document.body.style.backgroundColor = "black";
        //can also be done by class list
        //document.body.classList.add("dark"); create a class dark with styling in style.css
        //also remove light when dark is added and viceversa
        modeButton.innerText = "Dark Mode Activated!";
        currMode = "dark";
    }
    else{
        document.body.style.backgroundColor = "white";
        modeButton.innerText = "Light Mode Activated!";
        currMode = "light";
    }   
});


