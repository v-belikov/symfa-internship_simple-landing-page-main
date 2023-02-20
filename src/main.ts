// DO NOT REMOVE!
/* WRITE YOUR CODE BELOW */
import './styles.scss';

const body = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger_btn');
const burgerMenu = document.querySelector('.header_block__nav__burger');
const burgerLink = document.querySelectorAll('.header_block__nav__burger_list__link');
const galleryItemImg = document.querySelectorAll('.gallery__main_block__item_img');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content_img');
const sliderBtnPrevious = document.querySelector('.slider_btn_previous');
const sliderBtnNext = document.querySelector('.slider_btn_next');

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('lock');
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

burgerLink.forEach((btn: HTMLElement) => {
  btn.addEventListener('click', () => {
    body.classList.remove('lock');
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
  });
});

// slider
let currentImgIndex = 0;
const pictures: Array<string> = [];

const toggleModal = (): void => {
  body.classList.toggle('lock');
  modal.classList.toggle('active');
};

function activePicture(imgIndex: number) {
  const altName = pictures[imgIndex].slice(8, 15);

  modalContent.innerHTML = `<img src="${pictures[imgIndex]}" alt="${altName}">`;
}

galleryItemImg.forEach((img: HTMLElement, index: number) => {
  pictures.push(img.getAttribute('src'));
  img.addEventListener('click', () => {
    currentImgIndex = index;
    toggleModal();
    activePicture(currentImgIndex);
  });
});

const imgsCount = galleryItemImg.length;

modalContent.addEventListener('click', (event: any) => {
  const currentClick = !event.target.closest('modal_content_img');

  if (currentClick) {
    toggleModal();
  }
});

sliderBtnPrevious.addEventListener('click', () => {
  currentImgIndex -= 1;

  if (currentImgIndex < 0) {
    currentImgIndex = imgsCount - 1;
  }

  activePicture(currentImgIndex);
});

sliderBtnNext.addEventListener('click', () => {
  currentImgIndex += 1;

  if (currentImgIndex >= imgsCount) {
    currentImgIndex = 0;
  }

  activePicture(currentImgIndex);
});
