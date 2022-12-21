let count = 0
let countel = document.getElementById("counter")
let entries = document.getElementById("entries")
let savele = document.getElementById("save-el")
console.log(savele)



function increment(){
    count += 1 
    countel.textContent= count
}

function save(){
    let conca = count + " - "
    savele.textContent += conca
    console.log(conca)
    count = 0
    countel.textContent= count
}

