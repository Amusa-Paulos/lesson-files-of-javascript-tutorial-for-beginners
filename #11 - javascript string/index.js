var testOutput = document.getElementsByClassName('test-p-tag')[0];

let string1 = "hey i am a cool string 289";
let string2 = 'hey i am - in a single quote';
let string3 = `<p>i am a string in a \n
template literal</p>`; // template literals
let string_obj = new String("hey i am a cool string created by with an object");

// ESCAPE SEQUENCES: - 
/*
\b - backspace
\f - form feed
\n - new line
\r - carriage return
\t - tab
\v - vertical tab
*/

// COMMON METHODS
/*
    LENGTH
    CONCAT
    CHARAT
    TRIM
    SPLIT
    INDEXOF
    PADSTART  - ES 2017
    PADEND - ES 2017
*/


// testOutput.innerText = string1
// testOutput.innerText = string_obj
// testOutput.innerHTML = string2
// testOutput.innerText = string3
// testOutput.innerHTML = string3
// testOutput.innerText = string1.length
// testOutput.innerText = string1.concat(" ", string2)

let regexp = /[\-]/
testOutput.innerHTML = string2.replace(regexp, "/")

