function tabActive(tabs, callback) {
    const tabsButons = document.querySelectorAll(tabs);
    let activeTabIndex = 5; // Инициализируем индекс активного таба
  
    tabsButons.forEach((tab, index) => {
      tab.addEventListener('click', function () {
        // Удаляем класс активного таба у всех табов
        tabsButons.forEach(tab => tab.classList.remove('active'));
  
        // Добавляем класс активного таба только к тому, на который произошло нажатие
        this.classList.add('active');
  
        // Обновляем индекс активного таба
        activeTabIndex = index;
  
        // Вызываем колбэк, чтобы оповестить об изменении индекса
        if (typeof callback === 'function') {
          callback(activeTabIndex);
        }
      });
    });
  }
  
  export default tabActive;

