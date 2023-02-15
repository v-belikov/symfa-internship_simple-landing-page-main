import './styles.scss' // DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
const body = document.querySelector('.body')
const burger_btn = document.querySelector('.burger_btn')
const burger_menu = document.querySelector('.header_block__nav__burger')
const burger__link = document.querySelectorAll('.header_block__nav__burger_list__link')

burger_btn.addEventListener('click', () => {
  console.log('click')
  body.classList.toggle('lock')
  burger_btn.classList.toggle('active')
  burger_menu.classList.toggle('active')
})

Array.prototype.slice.call(burger__link).map((btn: any) => {
  btn.addEventListener('click', (event: any) => {
    body.classList.remove('lock')
    burger_btn.classList.remove('active')
    burger_menu.classList.remove('active')
  })
})