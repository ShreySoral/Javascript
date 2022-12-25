// Q1. Make a variable of type string and try to add a number to it.
let a="shrey"
let b=6
console.log(a + b)
// Q2 Use type of operator to find the data type of the string in last question.
console.log(typeof (a + b))
// Q3 create a const object in javascript can you change it hold a number later?
const a1 ={
    name:"Shrey",
    section:1,
    isPrincipal:false
}
// a1=45
// Q4 Try to addd a new key to the const object in problem 3 were you able to do it?
a1['friend']="Sahil"
a1['name']="Rakshit"
console.log(a1)
// Q5 write a js program to create a word meaning dictionary of 5 words
const dict={
    appreciate:"recognize the full worth of.",
    ataraxia:"a state of freedom from emotional disturbance and anxiety",
    yakka:"work especially hard work.",
    advice:"an opinion that someone offers you about what you should do or how you should act in a particular situation",
    appeal:"to make a serious request for something you need or want very much"
}
console.log(dict)
console.log(dict['appreciate'])
console.log(dict['ataraxia'])
console.log(dict['yakka'])
console.log(dict['advice'])
console.log(dict['appeal'])