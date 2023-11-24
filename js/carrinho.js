// verificação se os elementos do HTML foram carregados no site
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const removeProductsButton = document.getElementsByClassName("remove");

    for (var i = 0; i < removeProductsButton.length; i++) {
        removeProductsButton[i].addEventListener("click", removeProduct);
    }

    //mudando valor de acordo com a qtd do produto
    const quantityProducts = document.getElementsByClassName("input-cart");
    for (var i = 0; i < quantityProducts.length; i++) {
        quantityProducts[i].addEventListener("change", updateTotal);
    }

    // adicionar produto ao carrinho
    const addToCardButton = document.getElementsByClassName("botao")
    for (var i = 0; i < addToCardButton.length; i++){
        addToCardButton[i].addEventListener("click", addProductToCard)
    }
}

function addProductToCard(event){
    const button = event.target
    const productInfos = button.parentElement.parentElement
    cons
}

// remover produtos
function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}

// atualizar o valor total
function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName("");
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("price_cart")[0].innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseInt(cartProducts[i].getElementsByClassName("input-cart")[0].value, 10);

        totalAmount += productPrice * productQuantity;
    }

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = "R$" + totalAmount.toFixed(2).replace(".", ",");
}
updateTotal();



