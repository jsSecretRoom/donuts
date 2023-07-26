//donuts-cells-regulator
function chengeDonutBoxSize(lineConteiner, BtnBox, hideLine, donutCell, hideCell){

    const lineConteiners = document.querySelectorAll(lineConteiner);
    const buttonsBox = document.querySelectorAll(BtnBox);

    buttonsBox.forEach( function(button, i) {
        button.addEventListener('click', function(){
            const cells = document.querySelectorAll(donutCell);
            if (i === 0) {
                
                lineConteiners.forEach(function (line, j) {

                    if (j === 0) {
                        cells.forEach(function(cell, i){
                            if(i === 0){
                                cell.classList.add(hideCell)
                            }
                        });
                    } else if (j === 1) {
                        cells.forEach(function(cell, i){
                            if(i === 1){
                                cell.classList.add(hideCell)
                            }
                        });
                    } else if (j === 2 || j === 3) {
                        line.classList.add(hideLine);
                    }
                });
            }else if (i === 1) {
                lineConteiners.forEach(function (line, j) {
                  
                    if (j === 0) {
                        cells.forEach(function(cell, i){
                            if(i === 0){
                                cell.classList.add(hideCell)
                            }
                        });
                    } else if (j === 1) {
                        cells.forEach(function(cell, i){
                            if(i === 1){
                                cell.classList.add(hideCell)
                            }
                        });
                    }else if (j === 2) {
                        cells.forEach(function(cell, i){
                            if(i === 2){
                                cell.classList.add(hideCell)
                            }
                        });
                        if(line.classList.contains(hideLine)){
                            line.classList.remove(hideLine);
                        }
                    } else if (j === 3) {
                        line.classList.add(hideLine);
                    }
                });
            }else if (i === 2) {
                lineConteiners.forEach(function (line, j) {
                    if (j === 2 && line.classList.contains(hideLine)) {
                        line.classList.remove(hideLine);
                    }
                    if (j === 3) {
                        line.classList.add(hideLine);
                    }
                    cells.forEach(function(cell, i){
                        if(cell.classList.contains(hideCell)){
                            cell.classList.remove(hideCell)
                        }
                    });
                });
            }else if (i === 3) {
                lineConteiners.forEach(function (line, j) {
                    if (line.classList.contains(hideLine)) {
                        line.classList.toggle(hideLine);
                    }
                    cells.forEach(cell =>{
                        if(cell.classList.contains(hideCell)){
                            cell.classList.toggle(hideCell)
                        }
                    });
                });
            }
        });
    });
}
export default chengeDonutBoxSize;