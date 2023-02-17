import './styles.scss'; // DO NOT REMOVE!

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("burgerButton").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    });

})

var modal = document.querySelector('.modal-container');
const left = document.querySelector('.left');
const modalImg = document.querySelector('.modalImg');
const right = document.querySelector('.right');
var closeButton = document.querySelector('.close');
var modalTriggers = document.querySelectorAll('.image');

var isModalOpen = false;
var pageYOffset = 0;

const openModal = function(i: number) {
    left.addEventListener('click', function(){
        (i === 0) ? i=0 : i=i-1;
        modalImg.innerHTML = modalTriggers[i].outerHTML;
    });

    right.addEventListener('click', function(){
        (i === 11) ? i=11 : i=i+1;
        modalImg.innerHTML = modalTriggers[i].outerHTML;
    });

    pageYOffset = window.pageYOffset;
    isModalOpen = true;
    modal.classList.add('is-open')
    modalImg.innerHTML = modalTriggers[i].outerHTML;
}

const closeModal = function() {
    modal.classList.remove('is-open')
    isModalOpen = false;
}
const onScroll = function(e: Event) {
    if (isModalOpen) {
        e.preventDefault();
      window.scrollTo(0, pageYOffset);
    }
}

modalTriggers.forEach(function(item,i) { 
    item.addEventListener('click',()=> openModal(i));    
})

closeButton.addEventListener('click', closeModal);

document.addEventListener('scroll', onScroll);



