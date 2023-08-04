function setMyCells(selectorLineConteiner, buttosSellectSelector, callCell) {
    let buttonSellect = document.querySelectorAll(buttosSellectSelector);
  
    buttonSellect.forEach(function (button, i) {
      button.addEventListener('click', function () {
        let setMyCellsArray = []; // Обновляем массив при каждом клике
        let lines = document.querySelectorAll(selectorLineConteiner);
  
        lines.forEach(line => {
            if(!line.classList.contains('hide-donuts-conteiner')){
                line.querySelectorAll('.donut-cell1, .donut-cell2, .donut-cell3, .donut-cell4').forEach(cell => {
                    
    
                    if (i === 0 || i === 1 || i === 2) {
                        if (!cell.classList.contains('hide-donut-cell')) {
                            setMyCellsArray.push(cell);
                        }
                    } else if (i === 3) {
                        setMyCellsArray.push(cell);
                    }
                });
            }
        });
        callCell(setMyCellsArray);
      });
    });
  }
  
 export default setMyCells;

  
  
  
  
  
  