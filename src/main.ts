import './styles.scss' // DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
const body = document.querySelector('.body')
const burger_btn = document.querySelector('.burger_btn')
const burger_menu = document.querySelector('.header_block__nav__burger')
const burger__link = document.querySelectorAll('.header_block__nav__burger_list__link')
const gallery__item_img = document.querySelectorAll('.gallery__main_block__item_img')
const modal = document.querySelector('.modal')
const modal_content = document.querySelector('.modal_content_img')

burger_btn.addEventListener('click', () => {
  console.log('click')
  body.classList.toggle('lock')
  burger_btn.classList.toggle('active')
  burger_menu.classList.toggle('active')
})

Array.prototype.slice.call(burger__link).map((btn: any) => {
  btn.addEventListener('click', (event: any) => {
    body.classList.remove('lock')                                              //doesn't work !! WTF ?!
    burger_btn.classList.remove('active')
    burger_menu.classList.remove('active')
  })
})

Array.prototype.slice.call(gallery__item_img).map((img: any) => {
  img.addEventListener('click', (event: any) => {
    body.classList.remove('lock')                                              //doesn't work !! WTF ?!
    modal.classList.add('active')
    body.classList.remove('lock')
    let new_img = event.target
    modal_content.appendChild(new_img)
  })
})