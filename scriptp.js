window.onload=function(){
    const kole = document.querySelector(".kol");
    const liste = document.querySelector(".list");
    const bt_menu = document.querySelector(".bt-menu");
    const nav = document.querySelector(".nav");
     kole.addEventListener("click",()=>{
        console.log("Kliknieto");
        liste.classList.toggle('list--active')
       }); 
       bt_menu.addEventListener("click", ()=>{
        bt_menu.classList.toggle("bt-menu-active");
        nav.classList.toggle("nav-active");
      });
}
