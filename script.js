let copy = document.querySelector(".section-clients__logo-slide").cloneNode(true)
document.querySelector('.section-clients').appendChild(copy)

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector("nav")
const ul = document.querySelector("nav ul")

hamburguer.addEventListener("click", ()=>{
  ul.classList.toggle("active")
})
