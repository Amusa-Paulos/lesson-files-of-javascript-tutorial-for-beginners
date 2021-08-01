// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var outputCont = document.querySelector('#p-output');
const numberArray = [24, 89, 'paul', 56, 90, true, 82];
const secondArray = [35, 78, "Paulos Ab"]

let joinedArr = numberArray.concat(secondArray)

// numberArray.pop()
// numberArray.push(4000)
// numberArray.unshift(3000)
// numberArray.shift()

// numberArray.splice(1, 2, "Ab", 45, 10, 28)
// let newArr = numberArray.slice(2, 5)

// numberArray.sort()
// numberArray.reverse()

// for (let i = 0; i < numberArray.length; i++){
//     outputCont.innerHTML += numberArray[i] + "<br>"
// }

// numberArray.map(function (value, index, array) {
//     outputCont.innerHTML += value + ", " + index + ", " + array.toString() + "<br>";
// })

// numberArray.forEach((value, index, array) => {
//     outputCont.innerHTML += value + ", " + index + ", " + array.toString() + "<br>";
// })

// let newFilteredArr = numberArray.filter((value) => value > 50)



// const numObj = {"name": "Paul"}
// delete numObj.name
// delete numberArray[2] DO NOT USE

// console.log(numberArray[1])
// console.log(numberArray)
// numberArray[2] = 'Paulos'
// console.log(numberArray)
// console.log(numberArray.toString())

// console.log(Array.isArray(numberArray)) // true or false

// outputCont.innerText = numberArray.toString()
// outputCont.innerHTML = numberArray.join("<br>")

// outputCont.innerText = joinedArr.join(", ")
// outputCont.innerText = numberArray.join(", ")
outputCont.innerText = newFilteredArr.join(", ")