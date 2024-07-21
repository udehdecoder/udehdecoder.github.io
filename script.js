
console.log("hello wolrd")
button = document.querySelector("button")
input1 = document.getElementById("input1")
input2 = document.getElementById("input2")
body = document.querySelector("body")

button.addEventListener("click", function(){
    input1.value = "";
    input2.value ="";
    body.style.background = "white";
    body.style.background = "black";
    
})
input2.addEventListener("keypress", function(){
    if (event.which === 13){
        console.log("am chuks")
        input1.value ="";
        input2.value="";
    }
    console.log(event)
})