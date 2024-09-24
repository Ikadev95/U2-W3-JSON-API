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