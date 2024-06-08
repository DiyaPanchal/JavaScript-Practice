//Q1
let sum = 0;
let marks =[85,97,44,37,76,60];

for(let i=0; i<marks.length;i++){
    sum = sum+marks[i]; // sum +=marks[i]
}
let average = sum/marks.length;

console.log("The avg marks of entire class is=",average);

//Q2

let prices= [250,645,300,900,50];

let i=0;
for(let price of prices){
    let newprice= price - price*0.1;
    let newprices = [];
    newprices[i] = newprice;
    console.log(newprices[i]); 
    i++;
}

for(let i=0; i<prices.length;i++){
    let newprice= prices[i] - prices[i]*0.1;
     let newprices = [];
     newprices[i] = newprice;
     console.log(newprices[i]);//new array is made 
}
//console.log(newprices);

//for change in same array
for (let i = 0; i < prices.length; i++) {
  prices[i] -= prices[i] * 0.1;
}
console.log(prices);

//Q3

let companies= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);