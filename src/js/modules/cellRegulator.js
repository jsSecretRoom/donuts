function chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell) {
  const lineConteiners = document.querySelectorAll(lineConteiner);
  const buttonsBox = document.querySelectorAll(BtnBox);

  buttonsBox.forEach(function(button, i) {
    button.addEventListener('click', function() {
      // If the clicked button is not the 4th button (index 3), then proceed to change the selection
      if (i !== 3) {
        // Remove the "active" class from all buttons
        buttonsBox.forEach(function(btn) {
          btn.classList.remove('active');
        });

        // Add the "active" class to the clicked button
        button.classList.add('active');
      }

      // The rest of your code for applying styles to the elements
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
    buttonsBox[3].classList.add('active');
  }
  
  export default chengeDonutBoxSize;