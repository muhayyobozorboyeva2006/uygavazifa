let btn= document.getElementById("botton")

let defaultsidebar = document.getElementById("default-sidebar");

btn.addEventListener("click", function(){
    defaultsidebar.classList.toggle("hidden")
})