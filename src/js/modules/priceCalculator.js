import handleBoxSizeChange from './maxCellSize';

export function handleDonutCounter(productCards) {
  let currentMaxDonuts = 0;

  const updateCount = (card, newCount) => {
    card.setCount(newCount);
    const countElement = document.querySelector(`#donut-${card.id} .count`);
    countElement.textContent = newCount;
    updateTotalPrice(productCards); // Обновление общей стоимости при изменении количества продуктов
  };
  // Функция для обновления общей стоимости на странице
  const updateTotalPrice = (cards) => {
    const totalPriceElement = document.querySelector('.price-calculator');
    const totalPrice = cards.reduce((total, card) => {
      return total + card.count * card.priceDiscounted;
    }, 0);
    totalPriceElement.textContent = totalPrice + '$';
  };

  // Функция для сброса счетчиков продуктов до 0 при определенном значении maxDonuts
  const resetCount = () => {
    productCards.forEach((card) => {
      updateCount(card, 0); // Устанавливаем счетчик в 0
    });
  };

  // Обработка изменений maxDonuts при вызове функции handleBoxSizeChange
  handleBoxSizeChange('.choose', (maxDonuts) => {
    currentMaxDonuts = maxDonuts;
    
    if (maxDonuts === 6 || maxDonuts === 9 || maxDonuts === 12 || maxDonuts === 16) {
      resetCount();
    }
  });

  // Устанавливаем обработчики событий для каждого продукта
  productCards.forEach((card) => {
    const leftCountButton = document.querySelector(`#donut-${card.id} .left-count`);
    const rightCountButton = document.querySelector(`#donut-${card.id} .right-count`);

    leftCountButton.addEventListener('click', () => {
      if (card.count > 0) {
        updateCount(card, card.count - 1);
      }
    });

    rightCountButton.addEventListener('click', () => {
      const totalDonuts = productCards.reduce((total, card) => total + card.count, 0);
      if (totalDonuts < currentMaxDonuts) {
        updateCount(card, card.count + 1);
      }
    });
  });

  // Инициализация общей стоимости при загрузке страницы
  updateTotalPrice(productCards);
}






