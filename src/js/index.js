import sliderSwiper from './modules/slider';
import chengeDonutBoxSize from './modules/cellRegulator';
import wishAfterClick from './modules/wishOnBox';
import closeBoxAnimation from './modules/capOpenCloseAnimation';

import donutsGoods from './donutsService'

import processProductsData from './donutsCardsProcessing';


document.addEventListener('DOMContentLoaded', async function() {
    sliderSwiper('.left', '.right', '.carousel', '.slid', '.wraper');
    chengeDonutBoxSize('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell');
    wishAfterClick('.create-ovn-pack', '.wish');
    closeBoxAnimation('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');
    
    try {
        const data = await donutsGoods('./src/js/goods.json');
    
        if (data === null) {
          console.error("Data is null, check the request and file contents.");
        } else {
          const productsContainer = document.querySelector('.carousel');
          const productCardsHTML = processProductsData(data.products);
    
          // Вставляем сгенерированные карточки товаров в нужное место в HTML
          productsContainer.innerHTML = productCardsHTML;
        }
    } catch (error) {
        console.error(error);
    }
});