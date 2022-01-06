const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks=document.querySelectorAll('.menu a[hres^="#"]');

const observer=new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        entry.target.getAttribute("id");
        document.querySelector('.menu a[hres="#"]')
        if(entry.isIntersecting){
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLinks.classList.add("selected");
        }

    });

}, {rootMargin:"-50% 0px -50% 0px"})



menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("menu_aponed");
    })
    const hash=menuLinks.getAttribute("href");
    const target =document.querySelector(hash)
    if(target){
        observer.observe(target);
    }

})