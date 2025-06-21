const values = document.getElementById("values");
const change = document.getElementById("change")

change.addEventListener("click",()=>{
    if(values === "Goodby"){
        values = "Hello"
    }else{
        values = "Goodby"
    }
})
