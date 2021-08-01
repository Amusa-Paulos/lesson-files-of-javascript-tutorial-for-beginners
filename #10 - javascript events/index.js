var alertBtn = document.querySelector('#alert-btn');
console.log(alertBtn);
alertBtn.onclick = () => {
    alert('hey bro you clicked me!')
}

var evtIntro = document.querySelector('#event-intro')
 function mouseEvt () {
    this.style.color = "green"
}
// evtIntro.onmouseover = mouseEvt
evtIntro.addEventListener('mouseover', mouseEvt);
// window
const colorBlack = function () {
    this.style.color = "black"
    evtIntro.removeEventListener('mouseover', mouseEvt)
}

evtIntro.addEventListener('mouseout', colorBlack);

var form = document.querySelector('#form')
form.onsubmit = function (event) {
    event.preventDefault();
}

