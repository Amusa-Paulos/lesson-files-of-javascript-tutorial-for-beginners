var inputEl = document.querySelector('#guess-input')
var guessBtn = document.querySelector('#submit')
var chosenNumber = document.querySelector('#comp-number')
var isCorrect = document.querySelector('.isCorrect')

let m = Math

const getRandomNumber = (min, max) => {
    return m.floor(m.random() * (max - min) + 1) + min;
}


guessBtn.addEventListener('click', () => {
    let randNum = getRandomNumber(1, 10);
    let userInput = inputEl.value
    chosenNumber.innerText = randNum
    // if (randNum === userInput) {
    //     isCorrect.innerText = "Yeah!, you are right"
    // }else{
    //     isCorrect.innerText = "Noo, you are wrong"
    // }
    randNum === parseInt(userInput) ? isCorrect.innerText = "Yeah!, you are right"
     : isCorrect.innerText = "Noo, you are wrong"

})

