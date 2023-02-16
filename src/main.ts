// DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
import './styles.scss'

const body = document.querySelector('.body')
const burger_btn = document.querySelector('.burger_btn')
const burger_menu = document.querySelector('.header_block__nav__burger')
const burger__link = document.querySelectorAll('.header_block__nav__burger_list__link')
const gallery__item_img = document.querySelectorAll('.gallery__main_block__item_img')
// const gallery__main_block = document.querySelector('.gallery__main_block')
const modal = document.querySelector('.modal')
// const modal_content = document.querySelector('.modal_content_img')
const modal_content = document.querySelector('.modal_content_img') as HTMLElement
const slider_btn_previous = document.querySelector('.slider_btn_previous')
const slider_btn_next = document.querySelector('.slider_btn_next')

//burger
burger_btn.addEventListener('click', () => {
  body.classList.toggle('lock')
  burger_btn.classList.toggle('active')
  burger_menu.classList.toggle('active')
})

Array.prototype.slice.call(burger__link).map((btn: any) => {
  btn.addEventListener('click', () => {
    body.classList.remove('lock')
    burger_btn.classList.remove('active')
    burger_menu.classList.remove('active')
  })
})

// slider
let numberCurrentImg = 0
let langsArrayOfImg = 0

function activePicture(img: any) {
  console.log(img)
  modal_content.replaceWith(img)
}

Array.prototype.slice.call(gallery__item_img).map((img: any, index: any) => {
  numberCurrentImg = index
  langsArrayOfImg = gallery__item_img.length
  img.addEventListener('click', (event: any) => {
    console.log(index)
    const currentImg = gallery__item_img[index]
    body.classList.toggle('lock')
    modal.classList.toggle('active')
    activePicture(currentImg)
  })
})

slider_btn_previous.addEventListener('click', () => {
  --numberCurrentImg
  if (numberCurrentImg <= 0) { numberCurrentImg = 0 }
  console.log(numberCurrentImg)
  console.log('slider_btn_previous')
})

slider_btn_next.addEventListener('click', () => {
  ++numberCurrentImg
  if (numberCurrentImg >= langsArrayOfImg) { numberCurrentImg = 0 }
  console.log(numberCurrentImg)
  console.log('slider_btn_next')
})
