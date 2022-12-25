// nn bb ss u - Primitives in js
let a= null;
let b=345;
let c=true; //can also be false
let d =BigInt("567") + BigInt("3")
let e ="Harry"
let f=Symbol("I am a nice symbol")
let g=undefined
let h;
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(typeof h)

//objects in js
const item={
    "Harry":true,
    "Shrey":false,
    "Rohan":67,
    "Sahil":undefined
}
console.log(item["Harry"])
console.log(item["abcd"])
console.log(item["Shrey"])