/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell) {
    const lineConteiners = document.querySelectorAll(lineConteiner);
    const buttonsBox = document.querySelectorAll(BtnBox);
  
    buttonsBox.forEach(function(button, i) {
      button.addEventListener('click', function() {
        // Удаляем класс "active" со всех кнопок перед добавлением его к активной кнопке
        buttonsBox.forEach(function(btn) {
          btn.classList.remove('active');
        });
  
        // Добавляем класс "active" к активной кнопке
        button.classList.add('active');
  
        // Остальная часть вашего кода для применения стилей к элементам
        const cells = document.querySelectorAll(donutCell);
        lineConteiners.forEach(function(line, j) {
          if (i === 0) {
            if (j === 0) {
              cells.forEach(function(cell, i) {
                if (i === 0) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 1) {
              cells.forEach(function(cell, i) {
                if (i === 1) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 2 || j === 3) {
              line.classList.add(hideLine);
            }
          } else if (i === 1) {
            if (j === 0) {
              cells.forEach(function(cell, i) {
                if (i === 0) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 1) {
              cells.forEach(function(cell, i) {
                if (i === 1) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 2) {
              cells.forEach(function(cell, i) {
                if (i === 2) {
                  cell.classList.add(hideCell);
                }
              });
              if (line.classList.contains(hideLine)) {
                line.classList.remove(hideLine);
              }
            } else if (j === 3) {
              line.classList.add(hideLine);
            }
          } else if (i === 2) {
            if (j === 2 && line.classList.contains(hideLine)) {
              line.classList.remove(hideLine);
            }
            if (j === 3) {
              line.classList.add(hideLine);
            }
            cells.forEach(function(cell) {
              if (cell.classList.contains(hideCell)) {
                cell.classList.remove(hideCell);
              }
            });
          } else if (i === 3) {
            if (line.classList.contains(hideLine)) {
              line.classList.toggle(hideLine);
            }
            cells.forEach(function(cell) {
              if (cell.classList.contains(hideCell)) {
                cell.classList.toggle(hideCell);
              }
            });
          }
        });
      });
    });
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chengeDonutBoxSize);

/***/ }),

/***/ "./src/js/modules/filtersCards.js":
/*!****************************************!*\
  !*** ./src/js/modules/filtersCards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabFiltr(cards, activeTab, searchQuery) {
    if ( searchQuery && searchQuery.trim() !== "") {
      const lowerCaseSearchQuery = searchQuery.toLowerCase().trim();
      return cards.filter((card) =>
        card.name.toLowerCase().includes(lowerCaseSearchQuery)
      );
    }
    if (activeTab === 0) {
      return cards;
    }
    if (activeTab === 1) {
      return cards.filter(card => card.popular === true);
    }
    if (activeTab === 2) {
      return cards.filter(card => card.newArrival === true);
    }
    if (activeTab === 3) {
      return cards.filter(card => card.classification === "Fruity");
    }
    if (activeTab === 4) {
      return cards.filter(card => card.classification === "Holiday");
    }
    if (activeTab === 5) {
      return cards.filter(card => card.classification === "Classics");
    }
  
    return cards;
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabFiltr);

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

/***/ "./src/js/modules/tabsModule.js":
/*!**************************************!*\
  !*** ./src/js/modules/tabsModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputActive: () => (/* binding */ inputActive),
/* harmony export */   tabActive: () => (/* binding */ tabActive)
/* harmony export */ });
function tabActive(tabs, callback) { 
  const tabsButons = document.querySelectorAll(tabs);
  const searchInput = document.querySelector('.search');
  let activeTabIndex = 0; // Инициализируем индекс активного таба

  tabsButons.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // Удаляем класс активного таба у всех табов и инпута
      tabsButons.forEach(tab => tab.classList.remove('active'));
      searchInput.classList.remove('active'); // Используем переданный searchInput

      // Добавляем класс активного таба только к тому, на который произошло нажатие
      this.classList.add('active');

      // Обновляем индекс активного таба
      activeTabIndex = index;

      // Вызываем колбэк, чтобы оповестить об изменении индекса
      if (typeof callback === 'function') {
        callback(activeTabIndex);
      }
    });

    searchInput.addEventListener('click', () => {
      activeTabIndex = 0;
      searchInput.classList.add('active');
      tabsButons.forEach(tab => tab.classList.remove('active'));
      if (typeof callback === 'function') {
        callback(activeTabIndex);
      }
    });
  });
}

function inputActive(inputClass, searchValueColbeck) {
  const searchInput = document.querySelector(inputClass);
  let searchQuery = ''; // Изменим на переменную, чтобы можно было менять значение

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    if (typeof searchValueColbeck === 'function') {
      searchValueColbeck(searchQuery);
    }
  });

  // Возвращаем searchInput, чтобы его можно было использовать в других функциях
  return searchInput;
}






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
function wishAfterClick(createButton, wishText) {
    const button = document.querySelector(createButton);
    const wishContainer = document.querySelector(wishText);
  
    let isBonAppetit = false;
    let isButtonDisabled = false; // Флаг, указывающий, что кнопка заблокирована
  
    button.addEventListener('click', function() {
      if (!isButtonDisabled) { // Проверяем, не заблокирована ли уже кнопка
        isButtonDisabled = true; // Блокируем кнопку
        setTimeout(function() {
          isButtonDisabled = false; // После 2 секунд снимаем блокировку с кнопки
        }, 2000);
  
        if (isBonAppetit) {
          const newWishContent = '<p>Put in me!</p>';
          wishContainer.innerHTML = newWishContent;
        } else {
          const newWishContent = '<p>Bon appetit!</p>';
          wishContainer.innerHTML = newWishContent;
        }
        isBonAppetit = !isBonAppetit;
      }
    });
  }
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishAfterClick);

/***/ }),

/***/ "./src/js/service/donutsCardsProcessing.js":
/*!*************************************************!*\
  !*** ./src/js/service/donutsCardsProcessing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _donutsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donutsService */ "./src/js/service/donutsService.js");
/* harmony import */ var _modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/filtersCards */ "./src/js/modules/filtersCards.js");
/* harmony import */ var _modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tabsModule */ "./src/js/modules/tabsModule.js");



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

  createCardHTML() {
    const arrivalOrPopular = this.newArrival ? 'New' : this.popular ? 'Popular' : '';

    let newClass = '';
    if(arrivalOrPopular === 'Popular'){
      newClass = 'active'
    }else if(arrivalOrPopular === 'New'){
      newClass = 'active-new'
    }
    

    let newnamelangth = this.name.length;
    let newname = this.name; // Объявляем и инициализируем переменную
    if (newnamelangth >= 33) {
      newname = this.name.slice(0, 33) + '...'; // Присваиваем новое значение переменной
    }
    let newDesklangth = this.description.length;
    let newDesk = this.description; // Объявляем и инициализируем переменную
    if (newDesklangth >= 50) {
      newDesk = this.description.slice(0, 55) + '...'; // Присваиваем новое значение переменной
    }
    
    return `
    <div class="slid" id="${this.id}">
      <div class="cards-conteiner">

        <div class="product-img">
          <img class="product-foto" src="${this.imagePath}" alt="">
          <div class="bascet-button">
            <button class="ad-to-basket">add to basket</button>
          </div>
          <div class="card-info-indicator ${newClass}">
            <p>${arrivalOrPopular}</p>
          </div>
          <button class="star-feach">
            <img  src="./src/icons/Star_light.svg" alt="">
          </button>
        </div>

        <div class="product-info">
          <div class="description">
            <p>${this.classification} <span>${newname}</span></p>
            <p class="desk">${newDesk}</p>
          </div>
          <div class="price">
            <div class="info">
              <p class="weight">${this.weight_grams}g</p>
              <p class="calories">${this.calories}kkal</p>
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

function renderProductCards(cards) {
  const productCardsHTML = cards.map((card) => card.createCardHTML()).join('');
  const productsContainer = document.querySelector('.carousel');
  productsContainer.innerHTML = productCardsHTML;
}

async function getOneDonutCard() {
  try {
    const donutsGoodsService = new _donutsService__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const data = await donutsGoodsService.getDonutsSet();

    if (data === null) {
      console.error("Data is null, check the request and file contents.");
    } else {
      const productCards = data.products.map((product) => new ProductCard(product));

      // Используем tabActive с колбэком для отслеживания изменений activeTabIndex
      (0,_modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__.tabActive)('.tab-button', (activeTabIndex) => {
        const searchQuery = document.querySelector('.search').value.toLowerCase().trim();
        const filterCardS = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__["default"])(productCards, activeTabIndex, searchQuery);
        renderProductCards(filterCardS);
      });
      // Поиск карточек в search
      (0,_modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__.inputActive)('.search', (searchQuery) => {
        const activeTabIndex = document.querySelector('.tab-button.active')?.dataset.index || 0;
        const filterCards = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__["default"])(productCards, activeTabIndex, searchQuery);
        renderProductCards(filterCards);
      });

      // Выводим карточки товаров для начального активного таба
      const initialActiveTabIndex = 0;
      const filterCardS = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__["default"])(productCards, initialActiveTabIndex);
      renderProductCards(filterCardS);
    }
  } catch (error) {
    console.error(error);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOneDonutCard);

/***/ }),

/***/ "./src/js/service/donutsService.js":
/*!*****************************************!*\
  !*** ./src/js/service/donutsService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DonutsGoodsService {
  getResurse = async (url) => {
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
  getDonutsSet = () => {
    return this.getResurse('./src/js/goods.json');
  }
  getOneDonuts = () => {
    return this.getResurse('./src/js/oneDonut.json');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutsGoodsService);


/***/ }),

/***/ "./src/js/service/oneDonutCardsProcessing.js":
/*!***************************************************!*\
  !*** ./src/js/service/oneDonutCardsProcessing.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _donutsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donutsService */ "./src/js/service/donutsService.js");


class OneDonutCard {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.priceDiscounted = product.price_discounted;
    this.priceOriginal = product.price_original;
    this.photoLink = product.photo_link;
}
createCardHTML() {
    return `
    <div class="slid1" id="${this.id}">
        <div class="img-one-donut">
        <img src="${this.photoLink}" alt="" id="draggablePhoto1" draggable="true" ondragstart="drag(event)">
        </div>
        <div class="onlu-donut-conteiner">
        <div class="donut-naim">
            <p>${this.name}</p>
        </div>
        <div class="price">
            <p class="real-price">${ this.priceDiscounted}$</p>
            <p class="second-price">${this.priceOriginal}$</p>
        </div>
        <div class="count-indicator">
            <button class="left-count"><img src="./src/icons/Expand_left.svg" alt=""></button>
            <div class="count">0</div>
            <button class="right-count"><img src="./src/icons/Expand_Right.svg" alt=""></button>
        </div>
        </div>
    </div>
    `;
  }
}

async function processAndInsertProductCards() {
  try {
    const donutsGoodsService = new _donutsService__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const data = await donutsGoodsService.getOneDonuts();

    if (data === null) {
      console.error("Data is null, check the request and file contents.");
    } else {
      const productCards = data.oneDonut.map((product) => new OneDonutCard(product));
      const productCardsHTML = productCards.map((card) => card.createCardHTML()).join('');

      const productsContainer = document.querySelector('.carousel1');
      productsContainer.innerHTML = productCardsHTML;
    }
  } catch (error) {
    console.error(error);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processAndInsertProductCards);


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
/* harmony import */ var _service_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/donutsCardsProcessing */ "./src/js/service/donutsCardsProcessing.js");
/* harmony import */ var _service_oneDonutCardsProcessing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/oneDonutCardsProcessing */ "./src/js/service/oneDonutCardsProcessing.js");








document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.left', '.right', '.carousel', '.slid', '.wraper');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.left1', '.right1', '.carousel1', '.slid1', '.wraper1');
  (0,_modules_cellRegulator__WEBPACK_IMPORTED_MODULE_1__["default"])('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell');
  (0,_modules_wishOnBox__WEBPACK_IMPORTED_MODULE_2__["default"])('.create-ovn-pack', '.wish');
  (0,_modules_capOpenCloseAnimation__WEBPACK_IMPORTED_MODULE_3__["default"])('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');
  (0,_service_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_service_oneDonutCardsProcessing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map