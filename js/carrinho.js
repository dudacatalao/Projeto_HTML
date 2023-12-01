if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const removeProductsButton = document.getElementsByClassName("remove");

    for (let i = 0; i < removeProductsButton.length; i++) {
        removeProductsButton[i].addEventListener("click", removeProduct);
    }

    const quantityProducts = document.getElementsByClassName("input-cart");
    for (let i = 0; i < quantityProducts.length; i++) {
        quantityProducts[i].addEventListener("change", updateTotal);
    }

    const addToCardButton = document.getElementsByClassName("botao");
    for (let i = 0; i < addToCardButton.length; i++) {
        addToCardButton[i].addEventListener("click", addProductToCard);
    }
}

function addProductToCard(event) {
    const button = event.target;
    const productInfos = button.parentElement.parentElement;
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}

function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName("cart-item");
    for (let i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("price_cart")[0].innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseInt(cartProducts[i].getElementsByClassName("input-cart")[0].value, 10);

        totalAmount += productPrice * productQuantity;
    }

    const totalPrice = document.getElementById("total-price");
    const totalItems = document.querySelector(".total-items");

    totalItems.textContent = cartProducts.length;
    totalPrice.innerText = "R$" + totalAmount.toFixed(2).replace(".", ",");
}

updateTotal();