let matchUnnecessaryChars =
 /[\s|\(|\)|*\[|\]|*\{|\}|\/|\||\\|\-|_|\,|\.|\\|\$|\+|\d+|\:|\;|\'|\"|\:|\;]/g;

let matchUnnecessaryCharsString =
 /[\(|\)|*\[|\]|*\{|\}|\/|\||\\|\-|_|\,|\.|\\|\$|\+|\d+|\:|\;|\'|\"|\:|\;|\!]/g;

let reTest = "the paulos ab boy is a very good boy, paulos' uncle said";
let reTest2 = "the pAuLoS ab boy is a very good boy, paulos' uncle said";
let reTest3 = "this mark ! is unwanted - also the preceeding one'!";
let reTest4 = "this - - sentence ! is . u=intentionally written not; to make* a sense ["
let re1 = /paulos/;
let re2 = new RegExp('paulos', 'i')
let re3 = new RegExp(/paulos/, 'ig')
let re4 = /\!/g // | is used as OR

// .test and replace
// \w = a word
// \w+ = multiple words
// \d = matching a number (9 or 4)
// \d+ = matches multiple numbers
// \n = matches a newline
// \s = matches space

console.info(re1.test(reTest))
console.log(reTest);
console.log(reTest2);
console.info(reTest.replace(re1, "youtuber"))
console.info(reTest2.replace(re2, "youtuber"))
console.info(reTest2.replace(re3, "youtuber"))


console.log(reTest3.replace("this", "replaced-this"));
console.log(reTest3.replace(re4, "replaced"));

console.log()
console.log(reTest4);
console.log(reTest4.replace(matchUnnecessaryChars, "repld"));
console.log(reTest4.replace(matchUnnecessaryCharsString, "repld"));

