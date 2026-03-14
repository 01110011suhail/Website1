const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar(){

sidebar.classList.toggle("active");
overlay.classList.toggle("active");

}

function closeSidebar(){

sidebar.classList.remove("active");
overlay.classList.remove("active");

}


// DARK MODE

document.getElementById("darkToggle").onclick = function(){

document.body.classList.toggle("dark");

}


// DEMO CODE RUN

function runCode(){

let code = document.getElementById("code").value;

document.getElementById("output").innerText =
"Java requires backend compiler.\n\nYour code:\n\n" + code;

}
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

faqItems.forEach(el => {
if(el !== item){
el.classList.remove("active");
}
});

item.classList.toggle("active");

});

});