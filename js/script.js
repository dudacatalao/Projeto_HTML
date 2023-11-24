
var radio = document.querySelector('.manual-btn')
var count = 1

document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaimg()

},10000)

function proximaimg(){
    count++

    if(count > 3){
        count = 1
    }
    document.getElementById('radio'+count).checked = true

}

// product
function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName("product2");
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].getElementsByClassName("price-cp")[0].innerText.replace("R$", "").replace(",", "."))
        const productPrice2 = parseFloat(cartProducts[i].getElementsByClassName("price-cp2")[0].innerText.replace("R$", "").replace(",", "."))

        totalAmount += productPrice + productPrice2;
    }
    const totalPrice = document.getElementById("titulo5");
    totalPrice.innerText = "R$" + totalAmount.toFixed(2).replace(".", ",");
}
updateTotal();

