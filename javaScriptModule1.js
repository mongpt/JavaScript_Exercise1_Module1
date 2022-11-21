
//1
console.log("I'm printing to console!");

//2
var name = prompt("What is your name? ");
document.querySelector('#module1-2').innerHTML = 'Hello, ' + name + '!';

//3
var num1 = parseInt(prompt("Input the 1st number: "));
var num2 = parseInt(prompt("Input the 2nd number: "));
var num3 = parseInt(prompt("Input the 3rd number: "));
var sum = num1 + num2 + num3;
var product = num1 * num2 * num3;
var average = (num1 + num2 + num3)/3;
document.querySelector('#module1-3a').innerHTML = "Sum of " + num1 +" , "+num2+" , "+num3+" : " + sum;
document.querySelector('#module1-3b').innerHTML = "Product of " + num1 +" , "+num2+" , "+num3+" : " + product;
document.querySelector('#module1-3c').innerHTML = "Average of " + num1 +" , "+num2+" , "+num3+" : " + average;

//4
var studentName = prompt("What is your name? ");
var drawNum = Math.floor(Math.random() * 4) + 1;
var room;
switch(drawNum){
  case 1:
    room = "Daredevil";
    break;
  case 2:
    room = "Slytherin";
    break;
  case 3:
    room = "Hufflepuff";
    break;
  case 4:
    room = "Ravenclaw";
    break;
}
document.querySelector('#module1-4').innerHTML = studentName + ', you are ' + room +'.';

//5
var year = parseInt(prompt("Input a year: "));
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
  document.querySelector('#module1-5').innerHTML = year + " is a leaf year";
}
else {
  document.querySelector('#module1-5').innerHTML = year + " is not a leaf year";
}

//6
var response = confirm("Should I calculate the square root?");
if (response){
  var num = parseInt(prompt("Input a number to calculate sqrt: "));
  if (num < 0){
    document.querySelector('#module1-6').innerHTML = "The square root of a negative number is not defined";
  }
  else {
    document.querySelector('#module1-6').innerHTML = "Square root of " + num + " is: " + Math.sqrt(num).toFixed(2);
  }
}
else {
  document.querySelector('#module1-6').innerHTML = "The square root is not calculated.";
}

//7
var numDice = parseInt(prompt("How many dice? "));
var sumDice = 0;
for (let i = 1; i <= numDice; i++){
  sumDice += Math.floor(Math.random() * 6) + 1;
}
document.querySelector('#module1-7').innerHTML = "The sum of all dice is: " + sumDice;

//8
var startYear = parseInt(prompt("Enter start year: "));
var endYear = parseInt(prompt("Enter end year: "));

for (let i=startYear;i<=endYear;i++) {
  if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
    document.querySelector('#module1-8').innerHTML += "<li>"+i+"</li>";
  }
}

//9
var prime = parseInt(prompt("Input a number: "));
var halfPrime = Math.floor(prime / 2);
var isPrime = true;
for (let i=2;i<=halfPrime;i++){
  if (prime%i === 0){
    isPrime = false;
    break;
  }
}
if (isPrime){
  document.querySelector('#module1-9').innerHTML = prime +" is a prime number."
}
else {
  document.querySelector('#module1-9').innerHTML = prime +" is not a prime number."
}

//10
var numDice = parseInt(prompt("Dice number: "));
var sum = parseInt(prompt("Sum of the eyes: "));
var count = 0;
for (let i = 1; i <= 10000; i++){
  var sumDice = 0;
  for (let i = 1; i <= numDice; i++){
    sumDice += Math.floor(Math.random() * 6) + 1;
  }
  if (sumDice === sum){
    count ++;
  }
}
var probability = (count / 100).toFixed(2);
document.querySelector('#module1-10').innerHTML = "Probability to get sum "+sum+" with "+numDice+" dice is "+probability +"%"
