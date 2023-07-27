function wishAfterClick(createButton, wishText) {
    const button = document.querySelector(createButton);
    const wishContainer = document.querySelector(wishText);
  
    let isBonAppetit = false;
    let isButtonDisabled = false; // Флаг, указывающий, что кнопка заблокирована
  
    button.addEventListener('click', function() {
      if (!isButtonDisabled) { // Проверяем, не заблокирована ли уже кнопка
        isButtonDisabled = true; // Блокируем кнопку
        setTimeout(function() {
          isButtonDisabled = false; // После 2 секунд снимаем блокировку с кнопки
        }, 2000);
  
        if (isBonAppetit) {
          const newWishContent = '<p>Put in me!</p>';
          wishContainer.innerHTML = newWishContent;
        } else {
          const newWishContent = '<p>Bon appetit!</p>';
          wishContainer.innerHTML = newWishContent;
        }
        isBonAppetit = !isBonAppetit;
      }
    });
  }
  export default wishAfterClick;