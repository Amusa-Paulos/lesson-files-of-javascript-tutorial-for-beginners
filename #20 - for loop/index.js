// FOR....OF & FOR...IN
const numberArr = [23,478,23,55,67,77]
const numberObj = {"n1":34, "n2":27, "n3":19}

for (let i = 0; i < numberArr.length; i++) {
    const el = numberArr[i];
    console.log(el, "; ", i)
    
}

for(const property in numberObj){
    console.log("key: ", property, "; value: ", numberObj[property])
}

for(const value of numberArr){
    console.log("array value: ", value)
}

