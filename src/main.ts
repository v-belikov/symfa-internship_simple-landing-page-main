// DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
import './styles.scss';

const body = document.querySelector('.body') as HTMLElement;
const burgerBtn = document.querySelector('.burger_btn') as HTMLElement;
const burgerMenu = document.querySelector('.header_block__nav__burger') as HTMLElement;
const burgerLink = document.querySelectorAll('.header_block__nav__burger_list__link');
const galleryItemImg = document.querySelectorAll('.gallery__main_block__item_img');
const modal = document.querySelector('.modal') as HTMLElement;
const modalContent = document.querySelector('.modal_content_img') as HTMLElement;
const sliderBtnPrevious = document.querySelector('.slider_btn_previous') as HTMLElement;
const sliderBtnNext = document.querySelector('.slider_btn_next') as HTMLElement;

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('lock');
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

Array.prototype.slice.call(burgerLink).map((btn: HTMLElement) => {
  btn.addEventListener('click', () => {
    body.classList.remove('lock');
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
  });
});

// slider
let numberCurrentImg = 0;
let langsArrayOfImg = 0;
const arrayOfPictures: Array<string> = [];

function activePicture(imgIndex: number) {
  modalContent.innerHTML = `<img src="${arrayOfPictures[imgIndex]}" alt="">`;
}

Array.prototype.slice.call(galleryItemImg).map((img: HTMLElement, index: number) => {
  arrayOfPictures.push(img.querySelector('img').getAttribute('src'));
  langsArrayOfImg = galleryItemImg.length;
  img.addEventListener('click', () => {
    numberCurrentImg = index;
    body.classList.add('lock');
    modal.classList.add('active');
    activePicture(numberCurrentImg);
  });
});

modalContent.addEventListener('click', (event: any) => {
  const currentClick = !event.target.closest('modal_content_img');

  if (currentClick) {
    body.classList.remove('lock');
    modal.classList.remove('active');
  }
});

sliderBtnPrevious.addEventListener('click', () => {
  numberCurrentImg -= 1;

  if (numberCurrentImg < 0) {
    numberCurrentImg = langsArrayOfImg - 1;
  }

  activePicture(numberCurrentImg);
});

sliderBtnNext.addEventListener('click', () => {
  numberCurrentImg += 1;

  if (numberCurrentImg >= langsArrayOfImg) {
    numberCurrentImg = 0;
  }

  activePicture(numberCurrentImg);
});
