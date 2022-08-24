// const navMenu = document.getElementById('nav-menu');
// const toggleMenu = document.getElementById('toggle-menu');
// const closeMenu = document.getElementById('close-menu');


// toggleMenu.addEventListener("click", ()=>{
//     navMenu.classList.toggle('show')
// })

// closeMenu.addEventListener("click", ()=>{
//     navMenu.classList.remove('show')
// })




// ==============================       SideBar     ==========================================

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
btn.style.cursor = "pointer";
searchBtn.style.cursor = "pointer";

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}
