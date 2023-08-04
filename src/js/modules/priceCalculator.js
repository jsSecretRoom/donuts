import handleBoxSizeChange from './maxCellSize';
import setMyCells from './setMyCell';

export function handleDonutCounter(productCards) {
  let currentMaxDonuts = 0;

  const updateCount = (card, newCount) => {
    card.setCount(newCount);
    const countElement = document.querySelector(`#donut-${card.id} .count`);
    countElement.textContent = newCount;
    updateTotalPrice(productCards);
  };

  const updateTotalPrice = (cards) => {
    const totalPriceElement = document.querySelector('.price-calculator');
    const totalPrice = cards.reduce((total, card) => {
      return total + card.count * card.priceDiscounted;
    }, 0);
    totalPriceElement.textContent = totalPrice + '$';
  };

  const resetCount = () => {
    productCards.forEach((card) => {
      updateCount(card, 0);
    });
    linksArr = [];

    cells.forEach(cell =>{
      const imgElement = cell.querySelector('img');
      imgElement.src = './src/icons/donut.svg';
    });
  };

  

  handleBoxSizeChange('.choose', (maxDonuts) => {
    currentMaxDonuts = maxDonuts;

    if (maxDonuts === 6 || maxDonuts === 9 || maxDonuts === 12 || maxDonuts === 16) {
      resetCount();
      
    }
  });

  let cells = [];
  let linksArr = [];

  setMyCells('.line-conteiner', '.choose', (callCell) => {
    cells = callCell;
  });

  function addfotoByCell(donutcells, linksArr) {
    donutcells.forEach((cell, index) => {
      const imgElement = cell.querySelector('img');
      const linkObj = linksArr[index];
      if (imgElement && linkObj) {
        imgElement.src = linkObj.link;
      } else {
        imgElement.src = './src/icons/donut.svg';
      }
    });
  }

  function addFotoByArr(productCard) {
    linksArr.push({ link: productCard.photoLink, count: 1 });
  }

  function remuveAddFotoByArr(productCard) {
    const existingLink = linksArr.find((linkObj) => linkObj.link === productCard.photoLink);
    if (existingLink) {
      existingLink.count--;
      if (existingLink.count === 0) {
        const index = linksArr.indexOf(existingLink);
        if (index !== -1) {
          linksArr.splice(index, 1);
        }
      }
    }
  }

  productCards.forEach((card) => {
    const leftCountButton = document.querySelector(`#donut-${card.id} .left-count`);
    const rightCountButton = document.querySelector(`#donut-${card.id} .right-count`);

    leftCountButton.addEventListener('click', () => {
      if (card.count > 0) {
        updateCount(card, card.count - 1);
        remuveAddFotoByArr(card);
        addfotoByCell(cells, linksArr);
      }
    });

    rightCountButton.addEventListener('click', () => {
      const totalDonuts = productCards.reduce((total, card) => total + card.count, 0);
      if (totalDonuts < currentMaxDonuts) {
        updateCount(card, card.count + 1);
        addFotoByArr(card);
        addfotoByCell(cells, linksArr);
      }
    });
  });

  updateTotalPrice(productCards);
}