//Q1
function vowels(input){
    string = input.toLowerCase();
    let count=0;
    for(let i=0; i<string.length;i++){
        if (
          string[i] === "a" ||
          string[i] === "e" ||
          string[i] === "i" ||
          string[i] === "o" ||
          string[i] === "u"
        ) {
          count++;
        }
    }
    return count;
}
vowels("Diya");
//Q2

const arrowvowels = (input) =>{
    string = input.toLowerCase();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        count++;
      }
    }
    return count;
}

//Q3

let arr = [1,2,3,4,5,6,7];

arr.forEach((val) =>{
    console.log(val*val); //val**2
});

//Q4

let marks = [100,40,56,89,90,120,150,200];

newmarks = marks.filter((val) =>{
    return val>90;
})
console.log(newmarks);

//Q5

let n = prompt("Enter a number");
let num = [];
for(let i=1; i<= n ;i++){
    num[i-1] = i;
}
console.log(num);

let sum = num.reduce((prev,curr) =>{
    return prev + curr;
})
console.log(sum);

let factorial = num.reduce((prev,curr) =>{
    return prev*curr;
})
console.log(factorial);