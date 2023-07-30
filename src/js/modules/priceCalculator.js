export function handleDonutCounter(productCards) {
    const updateCount = (card, newCount) => {
        card.setCount(newCount);
        const countElement = document.querySelector(`#donut-${card.id} .count`); // Изменено: добавлен префикс "donut-"
        countElement.textContent = newCount;
    };
    
      productCards.forEach((card) => {
        const leftCountButton = document.querySelector(`#donut-${card.id} .left-count`); // Изменено: добавлен префикс "donut-"
        const rightCountButton = document.querySelector(`#donut-${card.id} .right-count`); // Изменено: добавлен префикс "donut-"
  
        leftCountButton.addEventListener('click', () => {
            if (card.count > 0) {
                updateCount(card, card.count - 1);
            }
        });
    
        rightCountButton.addEventListener('click', () => {
            updateCount(card, card.count + 1);
        });
        
    });
}

