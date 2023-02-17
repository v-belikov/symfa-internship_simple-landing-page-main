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
// косяк с работой самого слайдера, суть такова:
// имеем массив с путями к самим картинкам. При клике на картинку получаем порядковый номер этой картинки, //
// что позволяет нарисвать ее в модальном-окне-слайдере, перебрав этот массив.
// НО все картинки при работе вебпака(видимо) получают дополнительный уникальный класс?(добавляется к пути). Не совсем ясно, что делать в таком случае.
// обращаясь по путям с этим классом картинку получить у меня не получается. НО и без него тоже.  //
let numberCurrentImg = 0;
let langsArrayOfImg = 0;
const arrayOfPictures: Array<string> = [];

function activePicture(imgIndex: number) {
  console.log(numberCurrentImg);
  console.log(arrayOfPictures[imgIndex]);
  // console.log(arrayOfPictures)
  // modalContent.innerHTML += `<img src="./assets/img/png/IMG_${arrayOfPictures[imgIndex]}.png" alt="">`
  modalContent.innerHTML += `<img src="${arrayOfPictures[imgIndex]}" alt="">`;
}

Array.prototype.slice.call(galleryItemImg).map((img: HTMLElement, index: number) => {
  arrayOfPictures.push(img.querySelector('img').getAttribute('src'));
  // arrayOfPictures.push(img.querySelector('img').getAttribute('src').slice(11, 15));
  numberCurrentImg = index;
  langsArrayOfImg = galleryItemImg.length;
  img.addEventListener('click', () => {
    body.classList.toggle('lock');
    modal.classList.toggle('active');
    activePicture(numberCurrentImg);
  });
});

sliderBtnPrevious.addEventListener('click', () => {
  numberCurrentImg -= 1;

  if (numberCurrentImg <= 0) {
    numberCurrentImg = 0;
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
