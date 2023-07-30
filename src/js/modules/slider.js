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
                container.appendChild(slideItems[i].cloneNode(true));
            }
            for (let i = 0; i < slidesToShow; i++) {
                container.removeChild(slideItems[i]);
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

        for (let i = slideItems.length - 1; i >= slideItems.length - slidesToShow; i--) {
            const firstSlide = slideItems[0];
            container.insertBefore(slideItems[i].cloneNode(true), firstSlide);
        }
        for (let i = slideItems.length - 1; i >= slideItems.length - slidesToShow; i--) {
            container.removeChild(slideItems[i]);
        }

        container.style.transition = 'none';
        container.style.transform = `translateX(-${moveWidth}px)`;

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
    
    const updateSlider = () => {
        const currentSlide = container.querySelector('.slid1');
        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(-${currentSlide.offsetLeft}px)`;
      
        setTimeout(() => {
          for (let i = 0; i < slidesToShow; i++) {
            container.removeChild(container.querySelector('.slid1'));
          }
          container.style.transition = 'none';
          container.style.transform = 'translateX(0)';
      
          // После обновления слайдера, переинициализируем обработчики событий на карточках
          const productCards = container.querySelectorAll('.slid1');
          handleDonutCounter(productCards);
        }, 500);
    };
}
export default sliderSwiper;