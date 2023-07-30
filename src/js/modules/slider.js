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
            // Move the first slides to the end without cloning and removing
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

        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `translateX(${moveWidth}px)`;

        setTimeout(function() {
            // Move the last slides to the beginning without cloning and removing
            for (let i = slideItems.length - 1; i >= slideItems.length - slidesToShow; i--) {
                const firstSlide = slideItems[0];
                container.insertBefore(slideItems[i], firstSlide);
            }

            container.style.transition = 'none';
            container.style.transform = 'translateX(0)';
        }, 500);
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

export default sliderSwiper;