document.addEventListener('DOMContentLoaded', function() {

    function sliderSwiper(buttonLeft, buttonRight, carousel, slides, wrapper) {
        const leftButtons = document.querySelectorAll(buttonLeft);
        const rightButtons = document.querySelectorAll(buttonRight);
  
        function slideToNext(container) {
            const slideItems = container.querySelectorAll(slides);
            const slideWidth = slideItems[0].offsetWidth;
            const slidesToShow = 3;
            const moveWidth = slideWidth * slidesToShow;

            container.style.transition = 'transform 0.5s ease';
            container.style.transform = `translateX(-${moveWidth}px)`;

            setTimeout(function() {
                for (let i = 0; i < slidesToShow; i++) {
                container.appendChild(slideItems[i]);
                }
                container.style.transition = 'none';
                container.style.transform = 'translateX(0)';
            }, 500);
        }

        function slideToPrev(container) {
            const slideItems = container.querySelectorAll(slides);
            const slideWidth = slideItems[0].offsetWidth;
            const slidesToShow = 3;
            const moveWidth = slideWidth * slidesToShow;

            const lastSlide = slideItems[slideItems.length - 1];
            container.insertBefore(lastSlide, slideItems[0]);

            container.style.transition = 'none';
            container.style.transform = `translateX(-${moveWidth}px`;

            setTimeout(function() {
                container.style.transition = 'transform 0.5s ease';
                container.style.transform = 'translateX(0)';
            }, 50);
        }

        const addClickListener = (buttons, callback) => {
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                const container = button.closest(wrapper).querySelector(carousel);
                callback(container);
                });
            });
        };
  
      addClickListener(leftButtons, slideToPrev);
      addClickListener(rightButtons, slideToNext);
    }
    sliderSwiper('.left', '.right', '.carousel', '.slid', '.wraper');

});



function allowDrop(event) {
    event.preventDefault();
  }

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function drop(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedElementId);
    event.target.appendChild(draggedElement);
}