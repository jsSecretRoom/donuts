function chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell, box) {
    const lineConteiners = document.querySelectorAll(lineConteiner);
    const buttonsBox = document.querySelectorAll(BtnBox);
    const boxConteiner = document.querySelector(box);

    buttonsBox.forEach(function(button, i) {
      
      button.addEventListener('click', function() {
        
        boxConteiner.style.display = 'block';

        // Удаляем класс "active" со всех кнопок перед добавлением его к активной кнопке
        buttonsBox.forEach(function(btn) {
          btn.classList.remove('active');
        });
  
        // Добавляем класс "active" к активной кнопке
        button.classList.add('active');
  
        // Остальная часть вашего кода для применения стилей к элементам
        const cells = document.querySelectorAll(donutCell);
        lineConteiners.forEach(function(line, j) {
          
          if (i === 0) {
            if (j === 0) {
              cells.forEach(function(cell, i) {
                if (i === 0) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 1) {
              cells.forEach(function(cell, i) {
                if (i === 1) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 2 || j === 3) {
              line.classList.add(hideLine);
            }
          } else if (i === 1) {
            if (j === 0) {
              cells.forEach(function(cell, i) {
                if (i === 0) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 1) {
              cells.forEach(function(cell, i) {
                if (i === 1) {
                  cell.classList.add(hideCell);
                }
              });
            } else if (j === 2) {
              cells.forEach(function(cell, i) {
                if (i === 2) {
                  cell.classList.add(hideCell);
                }
              });
              if (line.classList.contains(hideLine)) {
                line.classList.remove(hideLine);
              }
            } else if (j === 3) {
              line.classList.add(hideLine);
            }
          } else if (i === 2) {
            if (j === 2 && line.classList.contains(hideLine)) {
              line.classList.remove(hideLine);
            }
            if (j === 3) {
              line.classList.add(hideLine);
            }
            cells.forEach(function(cell) {
              if (cell.classList.contains(hideCell)) {
                cell.classList.remove(hideCell);
              }
            });
          } else if (i === 3) {
            if (line.classList.contains(hideLine)) {
              line.classList.toggle(hideLine);
            }
            cells.forEach(function(cell) {
              if (cell.classList.contains(hideCell)) {
                cell.classList.toggle(hideCell);
              }
            });
          }
        });
      });
    });
  }
  
  export default chengeDonutBoxSize;