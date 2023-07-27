import DonutsGoodsService from './donutsService';
// import filterDataByTab from '../modules/filtersCards' 

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
    }

    let newnamelangth = this.name.length;
    let newname = this.name; // Объявляем и инициализируем переменную
    if (newnamelangth >= 33) {
      newname = this.name.slice(0, 33) + '...'; // Присваиваем новое значение переменной
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

async function getOneDonutCard() {
  try {
    const donutsGoodsService = new DonutsGoodsService();
    const data = await donutsGoodsService.getDonutsSet();

    if (data === null) {
      console.error("Data is null, check the request and file contents.");
    } else {
      const productCards = data.products.map((product) => new ProductCard(product));
      const productCardsHTML = productCards.map((card) => card.createCardHTML()).join('');

      const productsContainer = document.querySelector('.carousel');
      productsContainer.innerHTML = productCardsHTML;
    }
  } catch (error) {
    console.error(error);
  }
}

export default getOneDonutCard;


// async function getOneDonutCard(tab) { // Принимаем в качестве аргумента выбранный таб
//   try {
//     const donutsGoodsService = new DonutsGoodsService();
//     const data = await donutsGoodsService.getDonutsSet();

//     if (data === null) {
//       console.error("Data is null, check the request and file contents.");
//     } else {
//       // Фильтруем данные по выбранному табу
//       const filteredData = filterDataByTab(data.products, tab);

//       // Создаем карточки только для отфильтрованных данных
//       const productCards = filteredData.map((product) => new ProductCard(product));
//       const productCardsHTML = productCards.map((card) => card.createCardHTML()).join('');

//       const productsContainer = document.querySelector('.carousel');
//       productsContainer.innerHTML = productCardsHTML;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default getOneDonutCard;