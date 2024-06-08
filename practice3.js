for(let i=1; i <= 100; i++){
    if(i%2 === 0){
    console.log("i=",i);
    }
}

//Q2
let num= 25;

n = prompt("Enter the number");

while (n != num) {
  n = prompt("Re-Enter the number ");
  console.log("You entered the wrong number");
}
console.log("You entered the correct number");

//above can also be done as

while(n != num){
 n= prompt("Re-Enter the number ");
 console.log("You entered the wrong number");

 if(n == num){
    console.log("You entered the correct number");
 }
 
}

//Q3

let name = prompt("Enter your Full Name");

str1= name.toLowerCase();

let username = "@"+ str1 + str1.length;
console.log(username);