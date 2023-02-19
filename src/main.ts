import './styles.scss'; // DO NOT REMOVE!

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("burger-button").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    });
})

var modal = document.querySelector('.modal_container');
const left = document.querySelector('.modal_button_left');
const modalImg = document.querySelector('.modal_img');
const right = document.querySelector('.modal_button_right');
var closeButton = document.querySelector('.modal_button_close');
var modalTriggers = document.querySelectorAll('.galary_image');

var isModalOpen = false;
var pageYOffset = 0;

const openModal = function(imageIndex: number) {
    left.addEventListener('click', function(){
        (imageIndex === 0) ? imageIndex = 0 : imageIndex = imageIndex - 1;
        modalImg.innerHTML = modalTriggers[imageIndex].outerHTML;
    });

    right.addEventListener('click', function(){
        imageIndex === modalTriggers.length - 1 ? imageIndex = modalTriggers.length : imageIndex = imageIndex + 1;
        modalImg.innerHTML = modalTriggers[imageIndex].outerHTML;
    });

    pageYOffset = window.pageYOffset;
    isModalOpen = true;
    modal.classList.add('is-open')
    document.body.classList.add('open');
    modalImg.innerHTML = modalTriggers[imageIndex].outerHTML;
}

const closeModal = function() {
    document.body.classList.remove('open');
    modal.classList.remove('is-open')
    isModalOpen = false;
}

modalTriggers.forEach(function(item, index) { 
    item.addEventListener('click', function() {
        openModal(index);
     });    
})

closeButton.addEventListener('click', closeModal);


