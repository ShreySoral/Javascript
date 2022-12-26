// Q1 use logical operators to find whether the age of a person lies between 10 and 20
let age = prompt("What is your age?");
age = Number.parseInt(age)
if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20")
  }
else {
    console.log("Your age does not  lie between 10 and 20")
}

// Q2 Demonstrate the use of switch case statements in javscript
let Inputage = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")

// Q3 write a javascript program to find whether a number is divisible by 2 or 3
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}

// Q4 Write a javascript program to find whether a number is divisible by either 2 or 3
// Prompt the user to enter a number
let inputNum = prompt("Enter the number:");

// Convert the input string to an integer
inputNum = Number.parseInt(inputNum);

// Check if the number is divisible by 2 or 3
if (inputNum % 2 === 0 || inputNum % 3 === 0) {
  console.log(`${inputNum} is divisible by either 2 or 3`);
} else {
  console.log(`${inputNum} is not divisible by either 2 or 3`);
}

// Q5 print you can drive or you cannot drive based on age being greater than 18 using ternary operator
let Officialage = 19
let a = Officialage > 18 ? "You can drive" : "You cannot drive"
console.log(a)