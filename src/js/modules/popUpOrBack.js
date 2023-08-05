function collPopUp(callPopUp, popUpWindow, back) {
    const callButton = document.querySelector(callPopUp),
        popUp = document.querySelector(popUpWindow),
        backButton = document.getElementById(back);

    callButton.addEventListener('click', openPopUp);
    backButton.addEventListener('click', closePopUp);

    function openPopUp() {
        popUp.classList.add('active');
    }

    function closePopUp() {
        popUp.classList.remove('active');
    }
}

export default collPopUp;