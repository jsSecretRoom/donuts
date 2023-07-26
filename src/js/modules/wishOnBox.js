//wish and put in text
function wishAfterClick(createButton, wishText){
    const button = document.querySelector(createButton);
    const wishContainer = document.querySelector(wishText);

    let isBonAppetit = false;

    button.addEventListener('click', function() {
        if (isBonAppetit) {
            const newWishContent = '<p>Put in me!</p>';
            wishContainer.innerHTML = newWishContent;
        } else {
            const newWishContent = '<p>Bon appetit!</p>';
            wishContainer.innerHTML = newWishContent;
        }
        isBonAppetit = !isBonAppetit;
    });
}
export default wishAfterClick;