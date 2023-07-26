/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/donutsCardsProcessing.js":
/*!*****************************************!*\
  !*** ./src/js/donutsCardsProcessing.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Класс для представления карточки товара
class ProductCard {
  constructor(product) {
    this.id = product.id;

    this.classification = product.classification;
    this.name = product.name;
    
    this.description = product.description;
    this.imagePath = product.image_path;

    this.newArrival = product.new_arrival;
    this.popular = product.popular;

    this.weight_grams = product.weight_grams;
    this.calories = product.calories;
    
    this.discounted_price = product.discounted_price;
    this.realPrice = product.real_price;
  }

  // Метод для создания HTML-кода карточки товара
  createCardHTML() {

    const arrivalOrPopular = this.newArrival ? 'New' : this.popular ? 'Popular' : '';

    return `
    <div class="slid" id="${this.id}">
      <div class="cards-conteiner">

        <div class="product-img">
          <img class="product-foto" src="${this.imagePath}" alt="">
          <div class="bascet-button">
            <button class="ad-to-basket">add to basket</button>
          </div>
          <div class="card-info-indicator">
            <p>${arrivalOrPopular}</p>
          </div>
          <button class="star-feach">
            <img  src="./src/icons/Star_light.svg" alt="">
          </button>
        </div>

        <div class="product-info">
          <div class="description">
            <p>${this.classification} <span>${this.name}</span></p>
            <p class="desk">${this.description}</p>
          </div>
          <div class="price">
            <div class="info">
              <p class="weight">${this.weight_grams}</p>
              <p class="calories">${this.calories}</p>
            </div>
            <div class="price-conteiner">
              <p class="discount-price">${this.realPrice}$</p>
              <p class="real-price">${this.discounted_price}$</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    `;
  }
}

// Функция для обработки данных о продуктах
function processProductsData(products) {
  // Создаем экземпляры класса ProductCard для каждого продукта
  const productCards = products.map((product) => new ProductCard(product));

  // Создаем HTML-код для каждой карточки товара
  const productCardsHTML = productCards.map((card) => card.createCardHTML()).join('');

  // Возвращаем сгенерированный HTML для всех карточек товаров
  return productCardsHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processProductsData);

/***/ }),

/***/ "./src/js/donutsService.js":
/*!*********************************!*\
  !*** ./src/js/donutsService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donutsCardsProcessing */ "./src/js/donutsCardsProcessing.js");


// Функция для имитации запроса к файлу goods.json с использованием async/await и fetch

async function donutsGoods(url) {
  try {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status: ${res.status}`);
    }

    return await res.json();
    
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Вызываем функцию для имитации запроса данных и их обработки
donutsGoods('./src/js/goods.json')
  .then((data) => {
    if (data === null) {
      console.error("Data is null, check the request and file contents.");
    } else {
      // Используем импортированную функцию для обработки данных
      const productCardsHTML = (0,_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_0__["default"])(data.products);

      // Находим контейнер, куда хотим вставить карточки товаров
      const productsContainer = document.querySelector('.carousel');

      // Вставляем сгенерированные карточки товаров в нужное место в HTML
      productsContainer.innerHTML = productCardsHTML;
    }
  })
  .catch((error) => console.error(error));

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/modules/capOpenCloseAnimation.js":
/*!*************************************************!*\
  !*** ./src/js/modules/capOpenCloseAnimation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//cap animation
function closeBoxAnimation(button, capConteiner, cap, activeAnimaitClass, capContinerIndex, backCap, activHiden) {
    const animationButton = document.querySelector(button);
    const mainCupconteiner = document.querySelector(capConteiner);
    const boxCap = document.querySelector(cap);
    const backCapSelector = document.querySelector(backCap);
    let hideTimeout; // Идентификатор таймера для скрытия .back
    let isFlipped = false; // Флаг, показывающий, что крышка перевернута
    let isAnimating = false; // Флаг, показывающий, что анимация выполняется
  
    animationButton.addEventListener('click', function() {
        if (isAnimating) return; // Если анимация выполняется, не обрабатываем клик
        isAnimating = true;
    
        boxCap.classList.toggle(activeAnimaitClass);
        
        setTimeout(function(){
            mainCupconteiner.classList.toggle(capContinerIndex);
        }, 400);
        
    
        if (isFlipped) {
            // Если крышка перевернута, удаляем предыдущую анимацию и добавляем обратную анимацию
            boxCap.classList.remove('animate');
            boxCap.classList.add('reverseAnimate');
    
            // Запускаем таймер для скрытия задней части после обратной анимации
            hideTimeout = setTimeout(function() {
            backCapSelector.classList.remove(activHiden);
            }, 370);
        } else {
            // Если крышка не перевернута, удаляем предыдущую анимацию и добавляем анимацию
            boxCap.classList.remove('reverseAnimate');
            boxCap.classList.add('animate');
    
            // Показываем заднюю часть крышки через 870 миллисекунд после начала анимации открытия
            hideTimeout = setTimeout(function() {
            backCapSelector.classList.add(activHiden);
            }, 870);
        }
    
        // Переключаем состояние флага
        isFlipped = !isFlipped;
    
        // Ждем окончания анимации, устанавливаем флаг isAnimating в false
        const animationDuration = 2000; // Продолжительность анимации (2 секунды), установите согласно вашим стилям
        setTimeout(function() {
            isAnimating = false;
        }, animationDuration);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeBoxAnimation);

/***/ }),

/***/ "./src/js/modules/cellRegulator.js":
/*!*****************************************!*\
  !*** ./src/js/modules/cellRegulator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chengeDonutBoxSize);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSwiper);

/***/ }),

/***/ "./src/js/modules/wishOnBox.js":
/*!*************************************!*\
  !*** ./src/js/modules/wishOnBox.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishAfterClick);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_cellRegulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cellRegulator */ "./src/js/modules/cellRegulator.js");
/* harmony import */ var _modules_wishOnBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/wishOnBox */ "./src/js/modules/wishOnBox.js");
/* harmony import */ var _modules_capOpenCloseAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/capOpenCloseAnimation */ "./src/js/modules/capOpenCloseAnimation.js");
/* harmony import */ var _donutsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donutsService */ "./src/js/donutsService.js");
/* harmony import */ var _donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donutsCardsProcessing */ "./src/js/donutsCardsProcessing.js");










document.addEventListener('DOMContentLoaded', async function() {
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.left', '.right', '.carousel', '.slid', '.wraper');
    (0,_modules_cellRegulator__WEBPACK_IMPORTED_MODULE_1__["default"])('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell');
    (0,_modules_wishOnBox__WEBPACK_IMPORTED_MODULE_2__["default"])('.create-ovn-pack', '.wish');
    (0,_modules_capOpenCloseAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');
    
    try {
        const data = await (0,_donutsService__WEBPACK_IMPORTED_MODULE_4__["default"])('./src/js/goods.json');
    
        if (data === null) {
          console.error("Data is null, check the request and file contents.");
        } else {
          const productsContainer = document.querySelector('.carousel');
          const productCardsHTML = (0,_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_5__["default"])(data.products);
    
          // Вставляем сгенерированные карточки товаров в нужное место в HTML
          productsContainer.innerHTML = productCardsHTML;
        }
    } catch (error) {
        console.error(error);
    }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map