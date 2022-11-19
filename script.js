window.onload=function(){
const bts = document.querySelector(".bt-sm");
const btg = document.querySelector(".bt-big");
const menu = document.querySelector(".container");
const kole = document.querySelector(".kol");
const liste = document.querySelector(".list");
const bt_menu = document.querySelector(".bt-menu");
const nav = document.querySelector(".nav");
bt_menu.addEventListener("click", ()=>{
  bt_menu.classList.toggle("bt-menu-active");
  nav.classList.toggle("nav-active");
});

 bts.addEventListener("click",()=>{
   console.log("Kliknieto");
   menu.classList.remove('big');
   menu.classList.add('smal');
 });
 kole.addEventListener("click",()=>{
  console.log("Kliknieto");
  liste.classList.toggle('list--active')
 });
 btg.addEventListener("click",()=>{
   console.log("Kliknieto");
   menu.classList.remove('smal');
   menu.classList.add('big');
 });
}
