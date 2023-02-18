import './styles.scss';

const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal-body');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const images = document.querySelectorAll('.gallery-item');

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

images.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    prevBtn.addEventListener('click', () => {
      index === 0 ? (index = images.length - 1) : (index -= 1);
      modalBody.innerHTML = images[index].outerHTML;
    });

    nextBtn.addEventListener('click', () => {
      index === images.length - 1 ? (index = 0) : (index += 1);
      modalBody.innerHTML = images[index].outerHTML;
    });

    modal.style.display = 'block';
    modalBody.innerHTML = images[index].outerHTML;
  });
});
