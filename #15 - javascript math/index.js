var outputTag = document.getElementById('output-tag')

var m = Math

// Math.trunc // ES 6
// Math.sign // ES 6

// outputTag.innerText = m.E // exponential
// outputTag.innerText = m.PI // PI
// outputTag.innerText = m.sqrt(49) // SQARE ROOT
// outputTag.innerText = m.log2(25) // LOGARITHM BASE 2
// outputTag.innerText = m.sign(-67) == -1 ? "negative" : "positive" // NUMBER SIGN
// outputTag.innerText = m.trunc(35.476829)

// outputTag.innerText = m.round(45.9924) // 46
// outputTag.innerText = m.floor(35.578)
// outputTag.innerText = m.ceil(12.182)

// outputTag.innerText = m.random()
outputTag.innerText = m.floor(m.random() * 10)



