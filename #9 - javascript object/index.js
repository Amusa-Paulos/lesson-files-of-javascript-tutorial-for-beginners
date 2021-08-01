const cup  = {"color": "white", 
"size":40, 
"quantity":"1 liter"}

console.log("Cup: color: ", cup['color'], 
        ", size: ", cup['size'], 
        ", quantity: " + cup.quantity)

const car = {"speedLimit":400}
car.color = "blue" // add
car['maker'] = "Tesla"
console.log(car)
car.speedLimit = 600 // change value
console.log(car)
delete car['speedLimit']
console.log(car);

const cloth = {
    "color": "green",
    "size": 20,
    changeSize: function (newsize) {
        return this.size = newsize
    }

}

console.log("old size: ", cloth.size)
cloth.changeSize(15)
console.log("new size: ", cloth.size)

