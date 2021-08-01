var outputTag = document.querySelector('#output-tag');

var date = new Date();
console.log(date.getDay());

switch(date.getDay()){
    case 0:
    case 1:
        outputTag.innerText = "Hey it's monday"
        break;
    case 2:
        outputTag.innerText = "Hey it's monday"
        break;

    default: 
        outputTag.innerText = "Hey nothing was match"
}
