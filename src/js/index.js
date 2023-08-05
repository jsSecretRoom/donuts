import sliderSwiper from './modules/slider';
import chengeDonutBoxSize from './modules/cellRegulator';
import wishAfterClick from './modules/wishOnBox';
import closeBoxAnimation from './modules/capOpenCloseAnimation';
import selectCity from './modules/sellectCyti';
import collPopUp from './modules/popUpOrBack';


import processAndInsertProductCards  from './service/donutsCardsProcessing';
import getOneDonutCard from './service/oneDonutCardsProcessing'

document.addEventListener('DOMContentLoaded', function () {
  sliderSwiper('.left', '.right', '.carousel', '.slid', '.wraper');
  sliderSwiper('.left1', '.right1', '.carousel1', '.slid1', '.wraper1');
  
  chengeDonutBoxSize('.line-conteiner', '.choose', 'hide-donuts-conteiner', '.donut-cell4', 'hide-donut-cell', '.box-continer');
  wishAfterClick('.create-ovn-pack', '.wish');
  closeBoxAnimation('.create-ovn-pack', '.cap', '.box-cap', 'animate', 'index', '.back', 'activHiden');

  processAndInsertProductCards();
  getOneDonutCard();

  selectCity();

  collPopUp('.bag', '.bag-pop-up-windov', 'back');
  collPopUp('.order', '.bag-pop-up-windov', 'back');
});