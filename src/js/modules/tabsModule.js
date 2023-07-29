function tabActive(tabs, callback) { 
  const tabsButons = document.querySelectorAll(tabs);
  const searchInput = document.querySelector('.search');
  let activeTabIndex = 0; // Инициализируем индекс активного таба

  tabsButons.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // Удаляем класс активного таба у всех табов и инпута
      tabsButons.forEach(tab => tab.classList.remove('active'));
      searchInput.classList.remove('active'); // Используем переданный searchInput

      // Добавляем класс активного таба только к тому, на который произошло нажатие
      this.classList.add('active');

      // Обновляем индекс активного таба
      activeTabIndex = index;

      // Вызываем колбэк, чтобы оповестить об изменении индекса
      if (typeof callback === 'function') {
        callback(activeTabIndex);
      }
    });

    searchInput.addEventListener('click', () => {
      activeTabIndex = 0;
      searchInput.classList.add('active');
      tabsButons.forEach(tab => tab.classList.remove('active'));
      if (typeof callback === 'function') {
        callback(activeTabIndex);
      }
    });
  });
}

function inputActive(inputClass, searchValueColbeck) {
  const searchInput = document.querySelector(inputClass);
  let searchQuery = ''; // Изменим на переменную, чтобы можно было менять значение

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    if (typeof searchValueColbeck === 'function') {
      searchValueColbeck(searchQuery);
    }
  });

  // Возвращаем searchInput, чтобы его можно было использовать в других функциях
  return searchInput;
}


export  {tabActive, inputActive};

