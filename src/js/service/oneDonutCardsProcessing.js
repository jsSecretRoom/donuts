import DonutsGoodsService from './donutsService';
import {handleDonutCounter} from '../modules/priceCalculator'

class OneDonutCard {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.priceDiscounted = product.price_discounted;
    this.priceOriginal = product.price_original;
    this.photoLink = product.photo_link;
    this.count = 0;


    this.leftCountButton = document.createElement('button');
    this.leftCountButton.className = 'left-count';
    this.leftCountButton.innerHTML = '<img src="./src/icons/Expand_left.svg" alt="">';

    this.rightCountButton = document.createElement('button');
    this.rightCountButton.className = 'right-count';
    this.rightCountButton.innerHTML = '<img src="./src/icons/Expand_Right.svg" alt="">';

    this.countElement = document.createElement('div');
    this.countElement.className = 'count';
    this.countElement.textContent = this.count;

    // Обработчики клика привязываются здесь к созданным кнопкам
    this.leftCountButton.addEventListener('click', () => this.updateCount(this.count - 1));
    this.rightCountButton.addEventListener('click', () => this.updateCount(this.count + 1));
  }

  setCount(count) {
    if (typeof count === 'number') {
      this.count = count;
      this.countElement.textContent = count;
    }
  }
  updateCount(newCount) {
    this.count = newCount;
    this.countElement.textContent = newCount;
  }
  updateCount(newCount) {
    this.setCount(newCount);
  }

  createCardHTML() {
    return `
    <div class="slid1" id="donut-${this.id}">
      <div class="img-one-donut">
        <img src="${this.photoLink}" alt="" id="draggablePhoto1" draggable="true" ondragstart="drag(event)">
      </div>
      <div class="onlu-donut-conteiner">
        <div class="donut-naim">
          <p>${this.name}</p>
        </div>
        <div class="price">
          <p class="real-price">${this.priceDiscounted}$</p>
          <p class="second-price">${this.priceOriginal}$</p>
        </div>
        <div class="count-indicator">
          <!-- Вставляем кнопки и элемент для отображения счетчика count -->
          ${this.leftCountButton.outerHTML}
          ${this.countElement.outerHTML}
          ${this.rightCountButton.outerHTML}
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

      // Теперь после вставки HTML в DOM, вызываем функцию для обработки событий
      handleDonutCounter(productCards);
    }
  } catch (error) {
    console.error(error);
  }
}

export default processAndInsertProductCards;
