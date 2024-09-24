const resetBtn = document.getElementById("reset");
const submitBtn = document.getElementById("save");
const form = document.getElementById("form1");
const input = document.getElementById("name");

form.addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.setItem('name', input.value);
    
});

resetBtn.addEventListener("click", function(){
    localStorage.clear(); 
});