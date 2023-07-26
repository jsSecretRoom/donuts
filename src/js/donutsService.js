import processProductsData from './donutsCardsProcessing';

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
      const productCardsHTML = processProductsData(data.products);

      // Находим контейнер, куда хотим вставить карточки товаров
      const productsContainer = document.querySelector('.carousel');

      // Вставляем сгенерированные карточки товаров в нужное место в HTML
      productsContainer.innerHTML = productCardsHTML;
    }
  })
  .catch((error) => console.error(error));

  export default processProductsData;