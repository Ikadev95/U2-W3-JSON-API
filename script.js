const resetBtn = document.getElementById("remove");
const submitBtn = document.getElementById("save");
const form = document.getElementById("form1");
const input = document.getElementById("name");
const result = document.getElementById("result");

form.addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.setItem('name', input.value);
    result.innerText = input.value;
    input.value = "";
});

resetBtn.addEventListener("click", function(){
    localStorage.removeItem('name');
    input.value = ""
});


let time = 0;
let element = document.getElementById('seconds-counter');

function incrementSeconds() {
    time += 1;
    element.innerText = "sei qui da " + time + " secondi.";
    sessionStorage.setItem("time", time);
}

var cancel = setInterval(incrementSeconds, 1000); // richiama la funzione ogni 1000 ms quindi 1s

