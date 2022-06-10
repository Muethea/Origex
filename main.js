//======DOM=======//

const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*==========Colocar a sombra no Header=====*/

const header = document.querySelector('#header')

const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*SWIPER*/
const swiper = new swiper('.swiper-container', {
  slidesPerView:1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewell:true,
  Keyboard:true
})