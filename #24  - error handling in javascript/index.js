try{
    // let num1 = 2;
    console.log(num1);
}catch(err){
    console.error(err)
    alert("hey there's a mistake in the code")
    throw new Error("You made a mistake")
}finally{
    console.log("hey i am the finally and im showing this");
    console.log("hey i am outside the try block")
}
// console.log(str);

