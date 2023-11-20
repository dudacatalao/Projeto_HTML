// verificação se os elementos do html foram carregados no site
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready())
}else{
    ready();
}


function ready(){
    const removeProductsButton =  document.getElementsByClassName("remove")

    // chamando a função para remover produtos
    for (var i = 0; i < i < removeProductsButton.length; i++){
        removeProductsButton[i].addEventListener("click", removeProduct)
    }

    // alterando valor de acordo com o input de quantidade 
    const quantityProducts = document.getElementsByClassName("input-cart")
    for (var i = 0; i < quantityProducts.length; i++){
        quantityProducts[i].addEventListener("change", updateTotal)
    }
}


function removeProduct(event){
    event.target.parentElement.parentElement.remove()
    updateTotal();
}

// função para atualizar o valor total
function updateTotal(){
    let totalAmount = 0
    const cartProducts = document.getElementsByClassName("cart-item")
    for (var i = 0; i < cartProducts.length; i++){
        const productPrice = cartProducts[i].getElementsByClassName("price_cart")[0].innerText.replace("R$", "").replace(",", ".")
        const productQuantity = cartProducts[i].getElementsByClassName("input-cart")[0].value

        totalAmount += productPrice * productQuantity
    }

    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    const totalPrice = document.getElementById("total-price").innerText = "R$" + totalAmount
}
updateTotal();




