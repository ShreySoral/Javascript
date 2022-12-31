// Chapter 5 Practice Set
// Practice Problem 1
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let a1 = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

// Practice Problem 2
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]
let a2;
do {
  a = prompt("Enter a number")
  a = Number.parseInt(a)
  arr.push(a)
} while (a != 0);
console.log(arr)

// Practice Problem 3
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n1 = arr.filter((x)=>{
  return x%10 == 0
})
console.log(n1)

// Practice Problem 4
let arr4 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n2 = arr.map((x)=>{
  return x*x
})
console.log(n2)

// Practice Problem 5
let arr5 = [1, 2, 3, 4, 5]
let n3 = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n3)