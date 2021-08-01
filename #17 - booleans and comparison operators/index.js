// TRUE OR FALSE
// console.log(Boolean(10 > 8))
// console.log(Boolean(10 > 70))

// ==, <, >, <=, >=
let num = 3; // true
let str = ""
console.log(Boolean(str));
console.log(Boolean(-0));
console.log(Boolean(undefined)); // null, false, NaN

// COMPARISON OPERATORS
// && = [and] and ||  = [OR] and ! = [negation] 

// !true = false
// !false = true

// CONDINALS
// if, else, else...if, switch
let age = "";
if (age >= 18 && age < 35) {
    console.log("you are a young adult");

}else if(age >= 16 && age <= 17) {
    console.log("you are about to be an adult");

}else if(age >= 12 || age == ""){
    console.log("you are preparing to be an adult");

}else{
    console.log("you are not an adult");

}