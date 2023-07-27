import DonutsGoodsService from './donutsService';

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
    const donutsGoodsService = new DonutsGoodsService();
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

export default processAndInsertProductCards;
