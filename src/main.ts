import './styles.scss' // DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
const body = document.querySelector('.body')
const burger_btn = document.querySelector('.burger_btn')
const burger_menu = document.querySelector('.header_block__nav__burger')

burger_btn.addEventListener('click', () => {
  console.log('click')
  body.classList.toggle('lock')
  burger_btn.classList.toggle('active')
  burger_menu.classList.toggle('active')
})
