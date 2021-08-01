var outputCont = document.querySelector('#output-tag')
let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let seconds = document.querySelector('#seconds')

let date = new Date()
let secDate = Date()
let millSecs = Date.parse(Date());
let prevDayMillSecs = new Date(2021, 04, 01).valueOf()
let dateByMillSecs = new Date(prevDayMillSecs)



// outputCont.innerText = 
// date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "; "
//  + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

// date.setFullYear(2019)

// outputCont.innerText = date
date.setDate(date.getDate() + 12);
// outputCont.innerText = date
const clock = () => {
    var clockDate = new Date()
    hour.innerText = clockDate.getHours();
    minute.innerText = clockDate.getMinutes() < 10 ? "0" + clockDate.getMinutes() : clockDate.getMinutes();
    seconds.innerText = clockDate.getSeconds() < 10 ? "0" + clockDate.getSeconds() : clockDate.getSeconds();
    setInterval(() => {
        clock();
    }, 1000);
}

clock()

