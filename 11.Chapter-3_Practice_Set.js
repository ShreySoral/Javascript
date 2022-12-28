let marks={
    shrey:90,
    shubham:9,
    yash:56,
    monika:4
}
// Problem number 1
for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem number 2
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}

// Problem number 3
let cn = 4
let i
while(i!=cn){
    i = prompt("Enter a number")
    console.log("Try again")
}

console.log("You have entered the correct number")

// Problem number 4
const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))