//cap animation
function closeBoxAnimation(button, capConteiner, cap, activeAnimaitClass, capContinerIndex, backCap, activHiden) {
    const animationButton = document.querySelector(button);
    const mainCupconteiner = document.querySelector(capConteiner);
    const boxCap = document.querySelector(cap);
    const backCapSelector = document.querySelector(backCap);
    let hideTimeout; // Идентификатор таймера для скрытия .back
    let isFlipped = false; // Флаг, показывающий, что крышка перевернута
    let isAnimating = false; // Флаг, показывающий, что анимация выполняется
  
    animationButton.addEventListener('click', function() {
        if (isAnimating) return; // Если анимация выполняется, не обрабатываем клик
        isAnimating = true;
    
        boxCap.classList.toggle(activeAnimaitClass);
        
        setTimeout(function(){
            mainCupconteiner.classList.toggle(capContinerIndex);
        }, 400);
        
    
        if (isFlipped) {
            // Если крышка перевернута, удаляем предыдущую анимацию и добавляем обратную анимацию
            boxCap.classList.remove('animate');
            boxCap.classList.add('reverseAnimate');
    
            // Запускаем таймер для скрытия задней части после обратной анимации
            hideTimeout = setTimeout(function() {
            backCapSelector.classList.remove(activHiden);
            }, 370);
        } else {
            // Если крышка не перевернута, удаляем предыдущую анимацию и добавляем анимацию
            boxCap.classList.remove('reverseAnimate');
            boxCap.classList.add('animate');
    
            // Показываем заднюю часть крышки через 870 миллисекунд после начала анимации открытия
            hideTimeout = setTimeout(function() {
            backCapSelector.classList.add(activHiden);
            }, 870);
        }
    
        // Переключаем состояние флага
        isFlipped = !isFlipped;
    
        // Ждем окончания анимации, устанавливаем флаг isAnimating в false
        const animationDuration = 2000; // Продолжительность анимации (2 секунды), установите согласно вашим стилям
        setTimeout(function() {
            isAnimating = false;
        }, animationDuration);
    });
}
export default closeBoxAnimation;