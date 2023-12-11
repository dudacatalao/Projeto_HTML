import { listCarrinhoCompras, gerarPedido } from "./funcoes.js"
let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"))
let carrinho = document.querySelector('.cart')

listCarrinhoCompras(listaCarrinhoDeCompras,carrinho)

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null ){
    pedidos = []
}

let btn_finalizar = document.querySelector(".btn_finalizar")
console.log(btn_finalizar)
 btn_finalizar.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras,pedidos))





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
    let itemId = event.target.parentElement.parentElement
    event.target.parentElement.parentElement.remove();

    let index = listaCarrinhoDeCompras.findIndex( item => item.codigoProduto == itemId.id)
        listaCarrinhoDeCompras.splice(index,1)
        localStorage.setItem("carrinho",JSON.stringify(listaCarrinhoDeCompras))
    updateTotal();
}

function updateTotal() {
    let totalAmount = 0;
    let totalQuantity = 0;  // Added to keep track of total quantity
    const cartProducts = document.getElementsByClassName("cart-item");
    const totalResume = document.getElementById("total-resume");

    for (let i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("price_cart")[0].innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseInt(cartProducts[i].getElementsByClassName("input-cart")[0].value, 10);

        totalAmount += productPrice * productQuantity;
        totalQuantity += productQuantity;
    }

    totalResume.innerText = "R$" + totalAmount.toFixed(2).replace(".", ",");

    const totalPrice = document.getElementById("total-price");
    const totalItems = document.querySelector(".total-items");

    totalItems.textContent = cartProducts.length;
    totalPrice.innerText = "R$" + totalAmount.toFixed(2).replace(".", ",");

    const totalQuantityElement = document.getElementById("total-items");
    totalQuantityElement.innerText = totalQuantity;
}

updateTotal();


    
    

