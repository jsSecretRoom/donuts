/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_cellRegulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cellRegulator */ \"./src/js/modules/cellRegulator.js\");\n/* harmony import */ var _modules_wishOnBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/wishOnBox */ \"./src/js/modules/wishOnBox.js\");\n/* harmony import */ var _modules_capOpenCloseAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/capOpenCloseAnimation */ \"./src/js/modules/capOpenCloseAnimation.js\");\n/* harmony import */ var _modules_sellectCyti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sellectCyti */ \"./src/js/modules/sellectCyti.js\");\n/* harmony import */ var _service_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/donutsCardsProcessing */ \"./src/js/service/donutsCardsProcessing.js\");\n/* harmony import */ var _service_oneDonutCardsProcessing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/oneDonutCardsProcessing */ \"./src/js/service/oneDonutCardsProcessing.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.left', '.right', '.carousel', '.slid', '.wraper');\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.left1', '.right1', '.carousel1', '.slid1', '.wraper1');\r\n  (0,_modules_cellRegulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell', '.box-continer');\r\n  (0,_modules_wishOnBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.create-ovn-pack', '.wish');\r\n  (0,_modules_capOpenCloseAnimation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');\r\n  (0,_service_donutsCardsProcessing__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  (0,_service_oneDonutCardsProcessing__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  (0,_modules_sellectCyti__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://donuts/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/capOpenCloseAnimation.js":
/*!*************************************************!*\
  !*** ./src/js/modules/capOpenCloseAnimation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//cap animation\r\nfunction closeBoxAnimation(button, capConteiner, cap, activeAnimaitClass, capContinerIndex, backCap, activHiden) {\r\n    const animationButton = document.querySelector(button);\r\n    const mainCupconteiner = document.querySelector(capConteiner);\r\n    const boxCap = document.querySelector(cap);\r\n    const backCapSelector = document.querySelector(backCap);\r\n    let hideTimeout; // Идентификатор таймера для скрытия .back\r\n    let isFlipped = false; // Флаг, показывающий, что крышка перевернута\r\n    let isAnimating = false; // Флаг, показывающий, что анимация выполняется\r\n  \r\n    animationButton.addEventListener('click', function() {\r\n        if (isAnimating) return; // Если анимация выполняется, не обрабатываем клик\r\n        isAnimating = true;\r\n    \r\n        boxCap.classList.toggle(activeAnimaitClass);\r\n        \r\n        setTimeout(function(){\r\n            mainCupconteiner.classList.toggle(capContinerIndex);\r\n        }, 400);\r\n        \r\n    \r\n        if (isFlipped) {\r\n            // Если крышка перевернута, удаляем предыдущую анимацию и добавляем обратную анимацию\r\n            boxCap.classList.remove('animate');\r\n            boxCap.classList.add('reverseAnimate');\r\n    \r\n            // Запускаем таймер для скрытия задней части после обратной анимации\r\n            hideTimeout = setTimeout(function() {\r\n            backCapSelector.classList.remove(activHiden);\r\n            }, 370);\r\n        } else {\r\n            // Если крышка не перевернута, удаляем предыдущую анимацию и добавляем анимацию\r\n            boxCap.classList.remove('reverseAnimate');\r\n            boxCap.classList.add('animate');\r\n    \r\n            // Показываем заднюю часть крышки через 870 миллисекунд после начала анимации открытия\r\n            hideTimeout = setTimeout(function() {\r\n            backCapSelector.classList.add(activHiden);\r\n            }, 870);\r\n        }\r\n    \r\n        // Переключаем состояние флага\r\n        isFlipped = !isFlipped;\r\n    \r\n        // Ждем окончания анимации, устанавливаем флаг isAnimating в false\r\n        const animationDuration = 2000; // Продолжительность анимации (2 секунды), установите согласно вашим стилям\r\n        setTimeout(function() {\r\n            isAnimating = false;\r\n        }, animationDuration);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeBoxAnimation);\n\n//# sourceURL=webpack://donuts/./src/js/modules/capOpenCloseAnimation.js?");

/***/ }),

/***/ "./src/js/modules/cellRegulator.js":
/*!*****************************************!*\
  !*** ./src/js/modules/cellRegulator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell, box) {\r\n    const lineConteiners = document.querySelectorAll(lineConteiner);\r\n    const buttonsBox = document.querySelectorAll(BtnBox);\r\n    const boxConteiner = document.querySelector(box);\r\n\r\n    buttonsBox.forEach(function(button, i) {\r\n      \r\n      button.addEventListener('click', function() {\r\n        \r\n        boxConteiner.style.display = 'block';\r\n\r\n        // Удаляем класс \"active\" со всех кнопок перед добавлением его к активной кнопке\r\n        buttonsBox.forEach(function(btn) {\r\n          btn.classList.remove('active');\r\n        });\r\n  \r\n        // Добавляем класс \"active\" к активной кнопке\r\n        button.classList.add('active');\r\n  \r\n        // Остальная часть вашего кода для применения стилей к элементам\r\n        const cells = document.querySelectorAll(donutCell);\r\n        lineConteiners.forEach(function(line, j) {\r\n          \r\n          if (i === 0) {\r\n            if (j === 0) {\r\n              cells.forEach(function(cell, i) {\r\n                if (i === 0) {\r\n                  cell.classList.add(hideCell);\r\n                }\r\n              });\r\n            } else if (j === 1) {\r\n              cells.forEach(function(cell, i) {\r\n                if (i === 1) {\r\n                  cell.classList.add(hideCell);\r\n                }\r\n              });\r\n            } else if (j === 2 || j === 3) {\r\n              line.classList.add(hideLine);\r\n            }\r\n          } else if (i === 1) {\r\n            if (j === 0) {\r\n              cells.forEach(function(cell, i) {\r\n                if (i === 0) {\r\n                  cell.classList.add(hideCell);\r\n                }\r\n              });\r\n            } else if (j === 1) {\r\n              cells.forEach(function(cell, i) {\r\n                if (i === 1) {\r\n                  cell.classList.add(hideCell);\r\n                }\r\n              });\r\n            } else if (j === 2) {\r\n              cells.forEach(function(cell, i) {\r\n                if (i === 2) {\r\n                  cell.classList.add(hideCell);\r\n                }\r\n              });\r\n              if (line.classList.contains(hideLine)) {\r\n                line.classList.remove(hideLine);\r\n              }\r\n            } else if (j === 3) {\r\n              line.classList.add(hideLine);\r\n            }\r\n          } else if (i === 2) {\r\n            if (j === 2 && line.classList.contains(hideLine)) {\r\n              line.classList.remove(hideLine);\r\n            }\r\n            if (j === 3) {\r\n              line.classList.add(hideLine);\r\n            }\r\n            cells.forEach(function(cell) {\r\n              if (cell.classList.contains(hideCell)) {\r\n                cell.classList.remove(hideCell);\r\n              }\r\n            });\r\n          } else if (i === 3) {\r\n            if (line.classList.contains(hideLine)) {\r\n              line.classList.toggle(hideLine);\r\n            }\r\n            cells.forEach(function(cell) {\r\n              if (cell.classList.contains(hideCell)) {\r\n                cell.classList.toggle(hideCell);\r\n              }\r\n            });\r\n          }\r\n        });\r\n      });\r\n    });\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chengeDonutBoxSize);\n\n//# sourceURL=webpack://donuts/./src/js/modules/cellRegulator.js?");

/***/ }),

/***/ "./src/js/modules/filtersCards.js":
/*!****************************************!*\
  !*** ./src/js/modules/filtersCards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabFiltr(cards, activeTab, searchQuery) {\r\n    if ( searchQuery && searchQuery.trim() !== \"\") {\r\n      const lowerCaseSearchQuery = searchQuery.toLowerCase().trim();\r\n      return cards.filter((card) =>\r\n        card.name.toLowerCase().includes(lowerCaseSearchQuery)\r\n      );\r\n    }\r\n    if (activeTab === 0) {\r\n      return cards;\r\n    }\r\n    if (activeTab === 1) {\r\n      return cards.filter(card => card.popular === true);\r\n    }\r\n    if (activeTab === 2) {\r\n      return cards.filter(card => card.newArrival === true);\r\n    }\r\n    if (activeTab === 3) {\r\n      return cards.filter(card => card.classification === \"Fruity\");\r\n    }\r\n    if (activeTab === 4) {\r\n      return cards.filter(card => card.classification === \"Holiday\");\r\n    }\r\n    if (activeTab === 5) {\r\n      return cards.filter(card => card.classification === \"Classics\");\r\n    }\r\n  \r\n    return cards;\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabFiltr);\n\n//# sourceURL=webpack://donuts/./src/js/modules/filtersCards.js?");

/***/ }),

/***/ "./src/js/modules/maxCellSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/maxCellSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction handleBoxSizeChange(BtnBox, callback) {\r\n  const buttonsBox = document.querySelectorAll(BtnBox);\r\n\r\n  buttonsBox.forEach(function(button, i) {\r\n    button.addEventListener('click', function() {\r\n\r\n      let maxDonuts = 16; // Максимальное количество пончиков по умолчанию\r\n      \r\n      // Если нажата кнопка не с номером 4 (индекс 3), то изменяем выбор размера коробки\r\n      if (i !== 3) {\r\n        // Удаляем класс \"active\" со всех кнопок\r\n        buttonsBox.forEach(function(btn) {\r\n          btn.classList.remove('active');\r\n        });\r\n    \r\n        // Добавляем класс \"active\" к нажатой кнопке\r\n        buttonsBox[i].classList.add('active');\r\n    \r\n        // Обновляем максимальное количество пончиков на основе выбранного размера коробки\r\n        if (i === 0) {\r\n          maxDonuts = 6;\r\n        } else if (i === 1) {\r\n          maxDonuts = 9;\r\n        } else if (i === 2) {\r\n          maxDonuts = 12;\r\n        }\r\n      } else {\r\n        // Для кнопки с номером 4 (индекс 3) всегда устанавливаем максимальное количество пончиков равным 16\r\n        maxDonuts = 16;\r\n\r\n      }\r\n\r\n      // Вызываем переданный обратный вызов (callback) и передаем ему максимальное количество пончиков\r\n      callback(maxDonuts);\r\n    });\r\n  });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleBoxSizeChange);\n\n//# sourceURL=webpack://donuts/./src/js/modules/maxCellSize.js?");

/***/ }),

/***/ "./src/js/modules/priceCalculator.js":
/*!*******************************************!*\
  !*** ./src/js/modules/priceCalculator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDonutCounter: () => (/* binding */ handleDonutCounter)\n/* harmony export */ });\n/* harmony import */ var _maxCellSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maxCellSize */ \"./src/js/modules/maxCellSize.js\");\n/* harmony import */ var _setMyCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setMyCell */ \"./src/js/modules/setMyCell.js\");\n\r\n\r\n\r\nfunction handleDonutCounter(productCards) {\r\n  let currentMaxDonuts = 0;\r\n\r\n  const updateCount = (card, newCount) => {\r\n    card.setCount(newCount);\r\n    const countElement = document.querySelector(`#donut-${card.id} .count`);\r\n    countElement.textContent = newCount;\r\n    updateTotalPrice(productCards);\r\n  };\r\n\r\n  const updateTotalPrice = (cards) => {\r\n    const totalPriceElement = document.querySelector('.price-calculator');\r\n    const totalPrice = cards.reduce((total, card) => {\r\n      return total + card.count * card.priceDiscounted;\r\n    }, 0);\r\n    totalPriceElement.textContent = totalPrice + '$';\r\n  };\r\n\r\n  const resetCount = () => {\r\n    productCards.forEach((card) => {\r\n      updateCount(card, 0);\r\n    });\r\n    linksArr = [];\r\n\r\n    cells.forEach(cell =>{\r\n      const imgElement = cell.querySelector('img');\r\n      imgElement.src = './src/icons/donut.svg';\r\n    });\r\n  };\r\n\r\n  \r\n\r\n  (0,_maxCellSize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.choose', (maxDonuts) => {\r\n    currentMaxDonuts = maxDonuts;\r\n\r\n    if (maxDonuts === 6 || maxDonuts === 9 || maxDonuts === 12 || maxDonuts === 16) {\r\n      resetCount();\r\n      \r\n    }\r\n  });\r\n\r\n  let cells = [];\r\n  let linksArr = [];\r\n\r\n  (0,_setMyCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.line-conteiner', '.choose', (callCell) => {\r\n    cells = callCell;\r\n  });\r\n\r\n  function addfotoByCell(donutcells, linksArr) {\r\n    donutcells.forEach((cell, index) => {\r\n      const imgElement = cell.querySelector('img');\r\n      const linkObj = linksArr[index];\r\n      if (imgElement && linkObj) {\r\n        imgElement.src = linkObj.link;\r\n      } else {\r\n        imgElement.src = './src/icons/donut.svg';\r\n      }\r\n    });\r\n  }\r\n\r\n  function addFotoByArr(productCard) {\r\n    linksArr.push({ link: productCard.photoLink, count: 1 });\r\n  }\r\n\r\n  function remuveAddFotoByArr(productCard) {\r\n    const existingLink = linksArr.find((linkObj) => linkObj.link === productCard.photoLink);\r\n    if (existingLink) {\r\n      existingLink.count--;\r\n      if (existingLink.count === 0) {\r\n        const index = linksArr.indexOf(existingLink);\r\n        if (index !== -1) {\r\n          linksArr.splice(index, 1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  productCards.forEach((card) => {\r\n    const leftCountButton = document.querySelector(`#donut-${card.id} .left-count`);\r\n    const rightCountButton = document.querySelector(`#donut-${card.id} .right-count`);\r\n\r\n    leftCountButton.addEventListener('click', () => {\r\n      if (card.count > 0) {\r\n        updateCount(card, card.count - 1);\r\n        remuveAddFotoByArr(card);\r\n        addfotoByCell(cells, linksArr);\r\n      }\r\n    });\r\n\r\n    rightCountButton.addEventListener('click', () => {\r\n      const totalDonuts = productCards.reduce((total, card) => total + card.count, 0);\r\n      if (totalDonuts < currentMaxDonuts) {\r\n        updateCount(card, card.count + 1);\r\n        addFotoByArr(card);\r\n        addfotoByCell(cells, linksArr);\r\n      }\r\n    });\r\n  });\r\n\r\n  updateTotalPrice(productCards);\r\n}\n\n//# sourceURL=webpack://donuts/./src/js/modules/priceCalculator.js?");

/***/ }),

/***/ "./src/js/modules/sellectCyti.js":
/*!***************************************!*\
  !*** ./src/js/modules/sellectCyti.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction selectCity(city) {\r\n    const cityList = document.getElementById(\"cityList\");\r\n    const selectedCityButton = document.getElementById(\"selectedCity\");\r\n\r\n    // Показать/скрыть выпадающее меню при клике на кнопку\r\n    selectedCityButton.addEventListener(\"click\", function() {\r\n        cityList.classList.toggle(\"show\");\r\n    });\r\n\r\n    // Обработчик событий для выбора города\r\n    cityList.addEventListener(\"click\", function(event) {\r\n        if (event.target.tagName === \"A\") {\r\n            const selectedCity = event.target.textContent;\r\n            selectedCityButton.textContent = selectedCity;\r\n            cityList.classList.remove(\"show\");\r\n        }\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectCity);\n\n//# sourceURL=webpack://donuts/./src/js/modules/sellectCyti.js?");

/***/ }),

/***/ "./src/js/modules/setMyCell.js":
/*!*************************************!*\
  !*** ./src/js/modules/setMyCell.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setMyCells(selectorLineConteiner, buttosSellectSelector, callCell) {\r\n    let buttonSellect = document.querySelectorAll(buttosSellectSelector);\r\n  \r\n    buttonSellect.forEach(function (button, i) {\r\n      button.addEventListener('click', function () {\r\n        let setMyCellsArray = []; // Обновляем массив при каждом клике\r\n        let lines = document.querySelectorAll(selectorLineConteiner);\r\n  \r\n        lines.forEach(line => {\r\n            if(!line.classList.contains('hide-donuts-conteiner')){\r\n                line.querySelectorAll('.donut-cell1, .donut-cell2, .donut-cell3, .donut-cell4').forEach(cell => {\r\n                    \r\n    \r\n                    if (i === 0 || i === 1 || i === 2) {\r\n                        if (!cell.classList.contains('hide-donut-cell')) {\r\n                            setMyCellsArray.push(cell);\r\n                        }\r\n                    } else if (i === 3) {\r\n                        setMyCellsArray.push(cell);\r\n                    }\r\n                });\r\n            }\r\n        });\r\n        callCell(setMyCellsArray);\r\n      });\r\n    });\r\n  }\r\n  \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMyCells);\r\n\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://donuts/./src/js/modules/setMyCell.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderSwiper(buttonLeft, buttonRight, carousel, slides, wrapper) {\r\n    const leftButtons = document.querySelectorAll(buttonLeft);\r\n    const rightButtons = document.querySelectorAll(buttonRight);\r\n\r\n    function slideToNext(container) {\r\n        const slideItems = container.querySelectorAll(slides);\r\n        const slideWidth = slideItems[0].offsetWidth;\r\n        const slidesToShow = 3;\r\n        const moveWidth = slideWidth * slidesToShow;\r\n\r\n        container.style.transition = 'transform 0.5s ease';\r\n        container.style.transform = `translateX(-${moveWidth}px)`;\r\n\r\n        setTimeout(function() {\r\n            // Move the first slides to the end without cloning and removing\r\n            for (let i = 0; i < slidesToShow; i++) {\r\n                container.appendChild(slideItems[i]);\r\n            }\r\n\r\n            container.style.transition = 'none';\r\n            container.style.transform = 'translateX(0)';\r\n        }, 500);\r\n    }\r\n\r\n    function slideToPrev(container) {\r\n        const slideItems = container.querySelectorAll(slides);\r\n        const slideWidth = slideItems[0].offsetWidth;\r\n        const slidesToShow = 3;\r\n        const moveWidth = slideWidth * slidesToShow;\r\n\r\n        container.style.transition = 'transform 0.5s ease';\r\n        container.style.transform = `translateX(${moveWidth}px)`;\r\n\r\n        setTimeout(function() {\r\n            // Move the last slides to the beginning without cloning and removing\r\n            for (let i = slideItems.length - 1; i >= slideItems.length - slidesToShow; i--) {\r\n                const firstSlide = slideItems[0];\r\n                container.insertBefore(slideItems[i], firstSlide);\r\n            }\r\n\r\n            container.style.transition = 'none';\r\n            container.style.transform = 'translateX(0)';\r\n        }, 500);\r\n    }\r\n\r\n    const addClickListener = (buttons, callback) => {\r\n        buttons.forEach((button) => {\r\n            button.addEventListener('click', () => {\r\n                const container = button.closest(wrapper).querySelector(carousel);\r\n                callback(container);\r\n            });\r\n        });\r\n    };\r\n\r\n    addClickListener(leftButtons, slideToPrev);\r\n    addClickListener(rightButtons, slideToNext);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSwiper);\n\n//# sourceURL=webpack://donuts/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabsModule.js":
/*!**************************************!*\
  !*** ./src/js/modules/tabsModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputActive: () => (/* binding */ inputActive),\n/* harmony export */   tabActive: () => (/* binding */ tabActive)\n/* harmony export */ });\nfunction tabActive(tabs, callback) { \r\n  const tabsButons = document.querySelectorAll(tabs);\r\n  const searchInput = document.querySelector('.search');\r\n  let activeTabIndex = 0; // Инициализируем индекс активного таба\r\n\r\n  tabsButons.forEach((tab, index) => {\r\n    tab.addEventListener('click', function () {\r\n      // Удаляем класс активного таба у всех табов и инпута\r\n      tabsButons.forEach(tab => tab.classList.remove('active'));\r\n      searchInput.classList.remove('active'); // Используем переданный searchInput\r\n\r\n      // Добавляем класс активного таба только к тому, на который произошло нажатие\r\n      this.classList.add('active');\r\n\r\n      // Обновляем индекс активного таба\r\n      activeTabIndex = index;\r\n\r\n      // Вызываем колбэк, чтобы оповестить об изменении индекса\r\n      if (typeof callback === 'function') {\r\n        callback(activeTabIndex);\r\n      }\r\n    });\r\n\r\n    searchInput.addEventListener('click', () => {\r\n      activeTabIndex = 0;\r\n      searchInput.classList.add('active');\r\n      tabsButons.forEach(tab => tab.classList.remove('active'));\r\n      if (typeof callback === 'function') {\r\n        callback(activeTabIndex);\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction inputActive(inputClass, searchValueColbeck) {\r\n  const searchInput = document.querySelector(inputClass);\r\n  let searchQuery = ''; // Изменим на переменную, чтобы можно было менять значение\r\n\r\n  searchInput.addEventListener('input', () => {\r\n    searchQuery = searchInput.value.toLowerCase().trim();\r\n    if (typeof searchValueColbeck === 'function') {\r\n      searchValueColbeck(searchQuery);\r\n    }\r\n  });\r\n\r\n  // Возвращаем searchInput, чтобы его можно было использовать в других функциях\r\n  return searchInput;\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://donuts/./src/js/modules/tabsModule.js?");

/***/ }),

/***/ "./src/js/modules/wishOnBox.js":
/*!*************************************!*\
  !*** ./src/js/modules/wishOnBox.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction wishAfterClick(createButton, wishText) {\r\n    const button = document.querySelector(createButton);\r\n    const wishContainer = document.querySelector(wishText);\r\n  \r\n    let isBonAppetit = false;\r\n    let isButtonDisabled = false; // Флаг, указывающий, что кнопка заблокирована\r\n  \r\n    button.addEventListener('click', function() {\r\n      if (!isButtonDisabled) { // Проверяем, не заблокирована ли уже кнопка\r\n        isButtonDisabled = true; // Блокируем кнопку\r\n        setTimeout(function() {\r\n          isButtonDisabled = false; // После 2 секунд снимаем блокировку с кнопки\r\n        }, 2000);\r\n  \r\n        if (isBonAppetit) {\r\n          const newWishContent = '<p>Put in me!</p>';\r\n          wishContainer.innerHTML = newWishContent;\r\n        } else {\r\n          const newWishContent = '<p>Bon appetit!</p>';\r\n          wishContainer.innerHTML = newWishContent;\r\n        }\r\n        isBonAppetit = !isBonAppetit;\r\n      }\r\n    });\r\n  }\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishAfterClick);\n\n//# sourceURL=webpack://donuts/./src/js/modules/wishOnBox.js?");

/***/ }),

/***/ "./src/js/service/donutsCardsProcessing.js":
/*!*************************************************!*\
  !*** ./src/js/service/donutsCardsProcessing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _donutsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donutsService */ \"./src/js/service/donutsService.js\");\n/* harmony import */ var _modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/filtersCards */ \"./src/js/modules/filtersCards.js\");\n/* harmony import */ var _modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tabsModule */ \"./src/js/modules/tabsModule.js\");\n\r\n\r\n\r\nclass ProductCard {\r\n  constructor(product) {\r\n    this.id = product.id;\r\n    this.classification = product.classification;\r\n    this.name = product.name;\r\n    this.description = product.description;\r\n    this.imagePath = product.image_path;\r\n    this.newArrival = product.new_arrival;\r\n    this.popular = product.popular;\r\n    this.weight_grams = product.weight_grams;\r\n    this.calories = product.calories;\r\n    this.discounted_price = product.discounted_price;\r\n    this.realPrice = product.real_price;\r\n  }\r\n\r\n  createCardHTML() {\r\n    const arrivalOrPopular = this.newArrival ? 'New' : this.popular ? 'Popular' : '';\r\n\r\n    let newClass = '';\r\n    if(arrivalOrPopular === 'Popular'){\r\n      newClass = 'active'\r\n    }else if(arrivalOrPopular === 'New'){\r\n      newClass = 'active-new'\r\n    }\r\n    \r\n\r\n    let newnamelangth = this.name.length;\r\n    let newname = this.name; // Объявляем и инициализируем переменную\r\n    if (newnamelangth >= 33) {\r\n      newname = this.name.slice(0, 33) + '...'; // Присваиваем новое значение переменной\r\n    }\r\n    let newDesklangth = this.description.length;\r\n    let newDesk = this.description; // Объявляем и инициализируем переменную\r\n    if (newDesklangth >= 50) {\r\n      newDesk = this.description.slice(0, 55) + '...'; // Присваиваем новое значение переменной\r\n    }\r\n    \r\n    return `\r\n    <div class=\"slid\" id=\"${this.id}\">\r\n      <div class=\"cards-conteiner\">\r\n\r\n        <div class=\"product-img\">\r\n          <img class=\"product-foto\" src=\"${this.imagePath}\" alt=\"\">\r\n          <div class=\"bascet-button\">\r\n            <button class=\"ad-to-basket\">add to basket</button>\r\n          </div>\r\n          <div class=\"card-info-indicator ${newClass}\">\r\n            <p>${arrivalOrPopular}</p>\r\n          </div>\r\n          <button class=\"star-feach\">\r\n            <img  src=\"./src/icons/Star_light.svg\" alt=\"\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"product-info\">\r\n          <div class=\"description\">\r\n            <p>${this.classification} <span>${newname}</span></p>\r\n            <p class=\"desk\">${newDesk}</p>\r\n          </div>\r\n          <div class=\"price\">\r\n            <div class=\"info\">\r\n              <p class=\"weight\">${this.weight_grams}g</p>\r\n              <p class=\"calories\">${this.calories}kkal</p>\r\n            </div>\r\n            <div class=\"price-conteiner\">\r\n              <p class=\"discount-price\">${this.realPrice}$</p>\r\n              <p class=\"real-price\">${this.discounted_price}$</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\nfunction renderProductCards(cards) {\r\n  const productCardsHTML = cards.map((card) => card.createCardHTML()).join('');\r\n  const productsContainer = document.querySelector('.carousel');\r\n  productsContainer.innerHTML = productCardsHTML;\r\n}\r\n\r\nasync function getOneDonutCard() {\r\n  try {\r\n    const donutsGoodsService = new _donutsService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const data = await donutsGoodsService.getDonutsSet();\r\n\r\n    if (data === null) {\r\n      console.error(\"Data is null, check the request and file contents.\");\r\n    } else {\r\n      const productCards = data.products.map((product) => new ProductCard(product));\r\n\r\n      // Используем tabActive с колбэком для отслеживания изменений activeTabIndex\r\n      (0,_modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__.tabActive)('.tab-button', (activeTabIndex) => {\r\n        const searchQuery = document.querySelector('.search').value.toLowerCase().trim();\r\n        const filterCardS = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productCards, activeTabIndex, searchQuery);\r\n        renderProductCards(filterCardS);\r\n      });\r\n      // Поиск карточек в search\r\n      (0,_modules_tabsModule__WEBPACK_IMPORTED_MODULE_2__.inputActive)('.search', (searchQuery) => {\r\n        const activeTabIndex = document.querySelector('.tab-button.active')?.dataset.index || 0;\r\n        const filterCards = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productCards, activeTabIndex, searchQuery);\r\n        renderProductCards(filterCards);\r\n      });\r\n\r\n      // Выводим карточки товаров для начального активного таба\r\n      const initialActiveTabIndex = 0;\r\n      const filterCardS = (0,_modules_filtersCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productCards, initialActiveTabIndex);\r\n      renderProductCards(filterCardS);\r\n    }\r\n  } catch (error) {\r\n    console.error(error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOneDonutCard);\n\n//# sourceURL=webpack://donuts/./src/js/service/donutsCardsProcessing.js?");

/***/ }),

/***/ "./src/js/service/donutsService.js":
/*!*****************************************!*\
  !*** ./src/js/service/donutsService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DonutsGoodsService {\r\n  getResurse = async (url) => {\r\n    try {\r\n      let res = await fetch(url);\r\n\r\n      if (!res.ok) {\r\n        throw new Error(`Could not fetch ${url} status: ${res.status}`);\r\n      }\r\n\r\n      return await res.json();\r\n\r\n    } catch (error) {\r\n      console.error(error);\r\n      return null;\r\n    }\r\n  }\r\n  getDonutsSet = () => {\r\n    return this.getResurse('./src/js/goods.json');\r\n  }\r\n  getOneDonuts = () => {\r\n    return this.getResurse('./src/js/oneDonut.json');\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutsGoodsService);\r\n\n\n//# sourceURL=webpack://donuts/./src/js/service/donutsService.js?");

/***/ }),

/***/ "./src/js/service/oneDonutCardsProcessing.js":
/*!***************************************************!*\
  !*** ./src/js/service/oneDonutCardsProcessing.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _donutsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donutsService */ \"./src/js/service/donutsService.js\");\n/* harmony import */ var _modules_priceCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/priceCalculator */ \"./src/js/modules/priceCalculator.js\");\n\r\n\r\n\r\nclass OneDonutCard {\r\n  constructor(product) {\r\n    this.id = product.id;\r\n    this.name = product.name;\r\n    this.priceDiscounted = product.price_discounted;\r\n    this.priceOriginal = product.price_original;\r\n    this.photoLink = product.photo_link;\r\n    this.count = 0;\r\n\r\n\r\n    this.leftCountButton = document.createElement('button');\r\n    this.leftCountButton.className = 'left-count';\r\n    this.leftCountButton.innerHTML = '<img src=\"./src/icons/Expand_left.svg\" alt=\"\">';\r\n\r\n    this.rightCountButton = document.createElement('button');\r\n    this.rightCountButton.className = 'right-count';\r\n    this.rightCountButton.innerHTML = '<img src=\"./src/icons/Expand_Right.svg\" alt=\"\">';\r\n\r\n    this.countElement = document.createElement('div');\r\n    this.countElement.className = 'count';\r\n    this.countElement.textContent = this.count;\r\n\r\n    // Обработчики клика привязываются здесь к созданным кнопкам\r\n    this.leftCountButton.addEventListener('click', () => this.updateCount(this.count - 1));\r\n    this.rightCountButton.addEventListener('click', () => this.updateCount(this.count + 1));\r\n  }\r\n\r\n  setCount(count) {\r\n    if (typeof count === 'number') {\r\n      this.count = count;\r\n      this.countElement.textContent = count;\r\n    }\r\n  }\r\n  updateCount(newCount) {\r\n    this.count = newCount;\r\n    this.countElement.textContent = newCount;\r\n  }\r\n  updateCount(newCount) {\r\n    this.setCount(newCount);\r\n  }\r\n\r\n  createCardHTML() {\r\n    return `\r\n    <div class=\"slid1\" id=\"donut-${this.id}\">\r\n      <div class=\"img-one-donut\">\r\n        <img src=\"${this.photoLink}\" alt=\"\" id=\"draggablePhoto1\" draggable=\"true\" ondragstart=\"drag(event)\">\r\n      </div>\r\n      <div class=\"onlu-donut-conteiner\">\r\n        <div class=\"donut-naim\">\r\n          <p>${this.name}</p>\r\n        </div>\r\n        <div class=\"price\">\r\n          <p class=\"real-price\">${this.priceDiscounted}$</p>\r\n          <p class=\"second-price\">${this.priceOriginal}$</p>\r\n        </div>\r\n        <div class=\"count-indicator\">\r\n          <!-- Вставляем кнопки и элемент для отображения счетчика count -->\r\n          ${this.leftCountButton.outerHTML}\r\n          ${this.countElement.outerHTML}\r\n          ${this.rightCountButton.outerHTML}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\nasync function processAndInsertProductCards() {\r\n  try {\r\n    const donutsGoodsService = new _donutsService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const data = await donutsGoodsService.getOneDonuts();\r\n\r\n    if (data === null) {\r\n      console.error(\"Data is null, check the request and file contents.\");\r\n    } else {\r\n      const productCards = data.oneDonut.map((product) => new OneDonutCard(product));\r\n      \r\n      const productCardsHTML = productCards.map((card) => card.createCardHTML()).join('');\r\n\r\n      const productsContainer = document.querySelector('.carousel1');\r\n      productsContainer.innerHTML = productCardsHTML;\r\n\r\n      // Теперь после вставки HTML в DOM, вызываем функцию для обработки событий\r\n      (0,_modules_priceCalculator__WEBPACK_IMPORTED_MODULE_1__.handleDonutCounter)(productCards);\r\n    }\r\n  } catch (error) {\r\n    console.error(error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processAndInsertProductCards);\r\n\n\n//# sourceURL=webpack://donuts/./src/js/service/oneDonutCardsProcessing.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;