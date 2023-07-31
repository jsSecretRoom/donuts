
function handleBoxSizeChange(BtnBox, callback) {
  const buttonsBox = document.querySelectorAll(BtnBox);

  buttonsBox.forEach(function(button, i) {
    button.addEventListener('click', function() {
      let maxDonuts = 16; // Максимальное количество пончиков по умолчанию
      
      // Если нажата кнопка не с номером 4 (индекс 3), то изменяем выбор размера коробки
      if (i !== 3) {
        // Удаляем класс "active" со всех кнопок
        buttonsBox.forEach(function(btn) {
          btn.classList.remove('active');
        });
    
        // Добавляем класс "active" к нажатой кнопке
        buttonsBox[i].classList.add('active');
    
        // Обновляем максимальное количество пончиков на основе выбранного размера коробки
        if (i === 0) {
          maxDonuts = 6;
        } else if (i === 1) {
          maxDonuts = 9;
        } else if (i === 2) {
          maxDonuts = 12;
        }
      } else {
        // Для кнопки с номером 4 (индекс 3) всегда устанавливаем максимальное количество пончиков равным 16
        maxDonuts = 16;
      }

      // Вызываем переданный обратный вызов (callback) и передаем ему максимальное количество пончиков
      callback(maxDonuts);
    });
  });
}
export default handleBoxSizeChange;