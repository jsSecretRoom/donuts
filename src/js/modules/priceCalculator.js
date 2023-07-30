export function handleDonutCounter(productCards) {
    const updateCount = (card, newCount) => {
      card.setCount(newCount);
      const countElement = document.querySelector(`#donut-${card.id} .count`);
      countElement.textContent = newCount;
      updateTotalPrice(productCards); // Update the total price whenever a count is changed
    };
  
    const updateTotalPrice = (cards) => {
      const totalPriceElement = document.querySelector('.price-calculator');
      const totalPrice = cards.reduce((total, card) => {
        return total + card.count * card.priceDiscounted;
      }, 0);
      totalPriceElement.textContent = totalPrice + '$';
    };
  
    productCards.forEach((card) => {
      const leftCountButton = document.querySelector(`#donut-${card.id} .left-count`);
      const rightCountButton = document.querySelector(`#donut-${card.id} .right-count`);
  
      leftCountButton.addEventListener('click', () => {
        if (card.count > 0) {
          updateCount(card, card.count - 1);
        }
      });
  
      rightCountButton.addEventListener('click', () => {
        updateCount(card, card.count + 1);
      });
    });
  
    // Initial update of the total price
    updateTotalPrice(productCards);
  }

