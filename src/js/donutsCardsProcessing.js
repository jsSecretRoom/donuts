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
export default processProductsData;