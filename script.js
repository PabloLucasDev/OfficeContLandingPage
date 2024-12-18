const body = document.querySelector('body')

body.classList.add('js')

let copy = document.querySelector(".section-clients__logo-slide").cloneNode(true)
document.querySelector('.section-clients').appendChild(copy)

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector("nav")
const ul = document.querySelector("nav ul")

hamburguer.addEventListener("click", ()=>{
  ul.classList.toggle("active")
})

/* Scroll animation */

const sections = document.querySelectorAll('.js-scroll')
if(sections.length){

  const windowMetade = window.innerHeight * 0.6
  function scrollAnimation(){
    sections.forEach((section) =>{
      const sectionTop = section.getBoundingClientRect().top - windowMetade
      if(sectionTop < 0){
        section.classList.add("ativo")
      }
  
    })
  }
  scrollAnimation()
  window.addEventListener('scroll',scrollAnimation)
}

