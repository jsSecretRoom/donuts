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

    //donuts-cells-regulator
    function chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell){

        const lineConteiners = document.querySelectorAll(lineConteiner);
        const buttonsBox = document.querySelectorAll(BtnBox);

        buttonsBox.forEach( function(button, i) {
            button.addEventListener('click', function(){
                const cells = document.querySelectorAll(donutCell);
                if (i === 0) {
                    
                    lineConteiners.forEach(function (line, j) {

                        if (j === 0) {
                            cells.forEach(function(cell, i){
                                if(i === 0){
                                    cell.classList.add(hideCell)
                                }
                            });
                        } else if (j === 1) {
                            cells.forEach(function(cell, i){
                                if(i === 1){
                                    cell.classList.add(hideCell)
                                }
                            });
                        } else if (j === 2 || j === 3) {
                            line.classList.add(hideLine);
                        }
                    });
                }else if (i === 1) {
                    lineConteiners.forEach(function (line, j) {
                      
                        if (j === 0) {
                            cells.forEach(function(cell, i){
                                if(i === 0){
                                    cell.classList.add(hideCell)
                                }
                            });
                        } else if (j === 1) {
                            cells.forEach(function(cell, i){
                                if(i === 1){
                                    cell.classList.add(hideCell)
                                }
                            });
                        }else if (j === 2) {
                            cells.forEach(function(cell, i){
                                if(i === 2){
                                    cell.classList.add(hideCell)
                                }
                            });
                            if(line.classList.contains(hideLine)){
                                line.classList.remove(hideLine);
                            }
                        } else if (j === 3) {
                            line.classList.add(hideLine);
                        }
                    });
                }else if (i === 2) {
                    lineConteiners.forEach(function (line, j) {
                        if (j === 2 && line.classList.contains(hideLine)) {
                            line.classList.remove(hideLine);
                        }
                        if (j === 3) {
                            line.classList.add(hideLine);
                        }
                        cells.forEach(function(cell, i){
                            if(cell.classList.contains(hideCell)){
                                cell.classList.remove(hideCell)
                            }
                        });
                    });
                }else if (i === 3) {
                    lineConteiners.forEach(function (line, j) {
                        if (line.classList.contains(hideLine)) {
                            line.classList.toggle(hideLine);
                        }
                        cells.forEach(cell =>{
                            if(cell.classList.contains(hideCell)){
                                cell.classList.toggle(hideCell)
                            }
                        });
                    });
                }
            });
        });
    }
    chengeDonutBoxSize('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell');

    //wish and put in text
    function wishAfterClick(createButton, wishText){
        const button = document.querySelector(createButton);
        const wishContainer = document.querySelector(wishText);

        let isBonAppetit = false;

        button.addEventListener('click', function() {
            if (isBonAppetit) {
                const newWishContent = '<p>Put in me!</p>';
                wishContainer.innerHTML = newWishContent;
            } else {
                const newWishContent = '<p>Bon appetit!</p>';
                wishContainer.innerHTML = newWishContent;
            }
            isBonAppetit = !isBonAppetit;
        });
    }
    wishAfterClick('.create-ovn-pack', '.wish')

    //cap animation
    function closeBoxAnimation(button, capConteiner, cap, activeAnimaitClass, capContinerIndex){
        const animationButton = document.querySelector(button);
        const mainCupconteiner = document.querySelector(capConteiner);
        const boxCap = document.querySelector(cap);
        

        animationButton.addEventListener('click', function() {
            boxCap.classList.toggle(activeAnimaitClass);
            mainCupconteiner.classList.toggle(capContinerIndex);
        });
    }
    closeBoxAnimation('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index');
});



// function allowDrop(event) {
//     event.preventDefault();
//   }

// function drag(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
// }

// function drop(event) {
//     event.preventDefault();
//     const draggedElementId = event.dataTransfer.getData('text/plain');
//     const draggedElement = document.getElementById(draggedElementId);
//     event.target.appendChild(draggedElement);
// }
