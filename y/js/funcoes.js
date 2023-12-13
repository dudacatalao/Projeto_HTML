// Esta funcao carrega todos os produtos nas paginas HOME e PRODUTOS.Ela recebe 2 parametros: A lista dos produtos que será renderizada, e o local onde o HTML será injetado
export function carregaProdutos(lista, gridProduto) {
    lista.forEach(item => {
        const produtoHtml = `
        <div class="product prodID" id="${item.codigoProduto}">
            <img src="${item.imagemProduto}" alt="Produto 6" id="${item.codigoProduto}">
            <p class="prodtext">${item.nomeProduto}</p>
            <p class="description">${item.descricaoProduto}</p>
            <p class="price">${item.preco}</p>
            <a href="./produto_solo.html" id="${item.codigoProduto}">
                <button type="button" class="botao" id="${item.codigoProduto}">
                    <p id="${item.codigoProduto}">Comprar</p>
                </button>
            </a>
        </div>`
        gridProduto.innerHTML += produtoHtml;
    });
}

export function carregaProdutos2(lista, gridProduto) {
    lista.forEach(item => {
        const produtoHtml = `
        <div class="product_vend prodID" id="${item.codigoProduto}">
    
        <img src="${item.imagemProduto}" alt="Produto 1" id="${item.codigoProduto}">
        <h2>${item.nomeProduto}</h2>
        <p class="description">${item.descricaoProduto}</p>
        <p class="price">${item.preco}</p>
        <a href="./produto_solo.html" id="${item.codigoProduto}">
            <button type="button" class="botao" id="${item.codigoProduto}">
                <p id="${item.codigoProduto}">Comprar</p>
            </button>
        </a>
    </div>`;
        gridProduto.innerHTML += produtoHtml;
    });
}

// Esta funcao adiciona o evento click nos cards de produtos. Ela captura o id do elemento e salva no local storage.
export function handleClick(){
    let cardProdtuos = document.querySelectorAll(".prodID")
        cardProdtuos.forEach(card => card.addEventListener('click', (e) => {
    let idProd = e.target.id
        localStorage.setItem("IdProd",idProd)
    }))

}

// Esta funcao localiza um item em uma lista de items: recebe 2 paramentos: A lista de itens, como o catalogo de produtos, e o ID(codigo do produto) que deverá ser encontrado.
export function findItem(items, id){
    let item = items.find(produto => produto.codigoProduto == id)
    return item
}

// Esta funcao carrega o produto encontrado pela funcao findItem na pagina do produto. Recebe como parametro o produto que será renderizado na pagina do produto
export function carregaProduto(item){
    let insertProduto = document.querySelector("#insert_product")
    let html = ` <div class="container-prod">
    <div class="left-side">
        <dis class="items">
            <div class="select-image">
                <img src="${item.imagemProduto}" alt="">
            </div>
        </dis>
    </div>
    
    <div class="right-side">
        <div class="content">
            <h3>${item.nomeProduto}</h3>

            <div class="estrelas">
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
                <div class="estrelas">
                    <input type="radio" id="cm_star-empty" name="fb" value="" checked/>
                    <label for="cm_star-1"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-1" name="fb" value="1"/>
                    <label for="cm_star-2"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-2" name="fb" value="2"/>
                    <label for="cm_star-3"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-3" name="fb" value="3"/>
                    <label for="cm_star-4"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-4" name="fb" value="4"/>
                    <label for="cm_star-5"><i class="fa"></i></label>
                    <input type="radio" id="cm_star-5" name="fb" value="5"/>
                </div>
            </div>

            <div class="prices">
                <span class="price">${item.preco}</span>
                <span class="off">OU 3X DE ${item.parcelamento}</span>
            </div>

            <h2> ${item.descricaoProduto}</h2>
            <a href="#tatata"><p class="italico">QUERO SABER MAIS</p></a>

            <div class="options">
                <div class="amount">
                    <input type="number" id="quantidade">
                </div>

                <button class="button addCart"> <a href=""></a> <img src="icons/carrinho.svg" alt="">Adicionar ao carrinho</button>
            </div>
           
        </div>
</div>`
    insertProduto.innerHTML = html
}

// Esta função adiciona um item ao carrinho: recebe 2 parametros : o carrinho de compras e o produto que sera adicionado
export function addCarrinho(listaCompras, item, id) {
    const botaoComprar = document.querySelector(".addCart"); // Altere "botaoComprar" para o ID correto do botão
    botaoComprar.addEventListener("click", () => {
        if (listaCompras.find(item => item.codigoProduto == id)) {
            alert("Item já adicionado ao carrinho.");
            let i = listaCompras.findIndex(item => item.codigoProduto == id);
            listaCompras[i].quantidade += 1;
            localStorage.setItem("carrinho", JSON.stringify(listaCompras));
        } else {
            let quantidade = parseInt(document.querySelector("#quantidade").value);
            listaCompras.push({ ...item, quantidade });
            localStorage.setItem("carrinho", JSON.stringify(listaCompras));
            alert("Item adicionado ao carrinho.");
        }
    });
}

export function valorTotalQuantidade (listaCarrinhoDeCompras){
let soma = 0
let quantidade = 0
listaCarrinhoDeCompras.forEach(
  item => {
    soma += ((item.quantidade * item.preco))
    quantidade += item.quantidade
  }  
)
document.querySelector(".qtd_price_area span:nth-child(2)").innerHTML = `R$ ${soma}`
document.querySelector(".qtd_price_area span:first-child").innerHTML = `${quantidade}`
console.log(soma, quantidade)
}



export function listCarrinhoCompras (ListaCarrinhoDeCompras,carrinho){
    ListaCarrinhoDeCompras.forEach(item => {
       
        let html =`<div class="cart-item" id="${item.codigoProduto}">
        <img src="${item.imagemProduto}" alt="Produto 1">

        <div class="item-details">
            <p class="titulo_product">${item.nomeProduto}</p>
            <p class="description_product">${item.descricaoProduto}</p>
            <p class="price_cart">${item.preco}</p>
        </div>

        <div class="item-actions">
            <input type="number" value="1" class="input-cart">
            <button class="remove">Remover</button>
        </div>

    </div>`
    carrinho.innerHTML += html  
    });
}

export function deletarItem(listaCarrinhoDeCompras,valorTotalQuantidade){
    let botoesExcluir = document.querySelectorAll(".remove")
        
        botoesExcluir.forEach( botao =>
        botao.addEventListener("click", (event)=> {
       
        let cartList = document.querySelector('ul')
        let item = event.target.parentElement.parentElement
        cartList.removeChild(item)
        let itemId = item.id
        let index = listaCarrinhoDeCompras.findIndex( item => item.codigoProduto == itemId)
        listaCarrinhoDeCompras.splice(index,1)
        localStorage.setItem("carrinho",JSON.stringify(listaCarrinhoDeCompras))
        valorTotalQuantidade(listaCarrinhoDeCompras)
        cartIndicator(listaCarrinhoDeCompras)
        }))
}

export function gerarPedido(listaCarrinhoDeCompras,pedidos){
  
    let id = pedidos.length
     if (pedidos == null || pedidos == 0){id = 1}

    // let endereco = {
    //     nome: document.querySelector("input#nome").value,
    //     logradouro: document.querySelector("input#logradouro").value,
    //     cidade: document.querySelector("input#cidade").value,
    //     bairro: document.querySelector("input#bairro").value,
    //     estado: document.querySelector("input#estado").value,
    //     CEP: document.querySelector("input#CEP").value,
    //     telefone: document.querySelector("input#telefone").value,
    //     email: document.querySelector("input#email").value
    //      }

    let pedido = {
        id: id,
        itens: listaCarrinhoDeCompras,
        
    }

    pedidos.push(pedido)
    localStorage.setItem("pedidos",JSON.stringify(pedidos))
    localStorage.removeItem('carrinho')
    localStorage.removeItem('IdProd')
    alert("Pedido realizado com sucesso, preencha as informações a seguir para finalizar a compra")
    location.reload()

    }

    export function cartIndicator (listaCompras){
        let indicator = document.querySelector(".cart-item-qtd")
    if (listaCompras == null || listaCompras.length == 0){
        indicator.innerHTML = 0 
        indicator.classList.remove('show')
    } else {
        indicator.innerHTML = listaCompras.length
        indicator.classList.add("show")
    }}


