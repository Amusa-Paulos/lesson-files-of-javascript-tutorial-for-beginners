var tag1 = document.querySelector('#test-tag-1')
var tag2 = document.querySelector('#test-tag-2')

try {
    console.log(this)

const arrowFn = (event) => {
    console.log("arrow fn: ", this);
    console.log("event arrow fn: ", event);
    
}

const normalFn = function (event) {
    console.log("normal fn: ", this);
    console.log("event normal fn: ", event);
    if (event.type == "mouseover") {
        this.innerText = "you have moved the mouse over me"
        
    }else if (event.type == "click") {
        this.innerText = "you clicked me"
    }
}



tag1.addEventListener('mouseover', arrowFn)
tag1.addEventListener('mouseover', normalFn)

console.log()

tag2.addEventListener('click', arrowFn)
tag2.addEventListener('click', normalFn)
    
} catch (error) {
    console.error(error);
}

