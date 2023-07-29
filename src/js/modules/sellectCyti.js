function selectCity(city) {
    const cityList = document.getElementById("cityList");
    const selectedCityButton = document.getElementById("selectedCity");

    // Показать/скрыть выпадающее меню при клике на кнопку
    selectedCityButton.addEventListener("click", function() {
        cityList.classList.toggle("show");
    });

    // Обработчик событий для выбора города
    cityList.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const selectedCity = event.target.textContent;
            selectedCityButton.textContent = selectedCity;
            cityList.classList.remove("show");
        }
    });
}
export default selectCity;