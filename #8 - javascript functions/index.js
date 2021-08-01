let number1 = 47; // in the global scope
let number2 = 29;
function multiply(num1, num2) {

    console.log(num1 * num2)
}

const add = function (num1, num2) {
    console.log(num1 + num2)
}

const reduce = (num1, num2) => {
    console.log(num1 - num2)
}

const checkNumber = () => {
    var number1 = 38
    var number2 = 72 
    var twoNum = 67
    console.log(number1, " and ", number2)
}

const calc_age = (old_age, young_age) => {
    const calc = () => {
        return old_age - young_age
    }

    return calc()
}

const factorial = (num) => {
    if(num === 1 || num < 1){
        return 1
    }else{
        return num * factorial(num - 1)
    }
}

// this

const testArrowFunction = () => {
    this.name = "Paulos Ab" 
    console.log("first fn", name)
}
const testNormalFunction = function () {
    this.secname = "Paulos"
    console.log("sec fn", secname)
}
function testThirdFunction () {
    this.thname = "Ab Paulos"
    console.log("third fn", thname)
}


multiply(3, 2) // 3 and 2 are arguments
add(10, 20) // 30
reduce(40, 25) // 15
checkNumber()
let ageDiff = calc_age(56, 39)

console.log("factorial is: ", factorial(6))
testArrowFunction()
testNormalFunction()
testThirdFunction()
console.log(name)
console.log(secname)
console.log(thname);
// console.log(twoNum)

