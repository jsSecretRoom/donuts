import sliderSwiper from './modules/slider';
import chengeDonutBoxSize from './modules/cellRegulator';
import wishAfterClick from './modules/wishOnBox';
import closeBoxAnimation from './modules/capOpenCloseAnimation';


import processAndInsertProductCards  from './service/donutsCardsProcessing';


document.addEventListener('DOMContentLoaded', function () {
  sliderSwiper('.left', '.right', '.carousel', '.slid', '.wraper');
  chengeDonutBoxSize('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell');
  wishAfterClick('.create-ovn-pack', '.wish');
  closeBoxAnimation('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');
  processAndInsertProductCards();
});