import { catalogoProdutos } from "./dados.js";
import { findItem, carregaProduto, addCarrinho} from "./funcoes.js";
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))

if (listaCompras == null){
    listaCompras = []
}

let Id = localStorage.getItem("IdProd")
let item = findItem(catalogoProdutos,Id)
carregaProduto(item)
addCarrinho(listaCompras,item,Id)



// Código para encontrar o produto correspondente ao ID na página do produto
// const id = window.location.search.substr(1).replace('id=', '');
 
// // Encontrar o produto com o ID correspondente
// const val = items.find(item => item.id == id);
 
// // Verificar se o produto foi encontrado
// if (val) {
//     // Atualizar os elementos do DOM com as informações do produto
//     document.getElementById('nome').innerHTML = val.nomeProduto;
//     document.getElementById('categoria').innerHTML = val.categoria;
//     document.getElementById('descricao').innerHTML = val.descricaoProduto;
//     document.getElementById('prices').innerHTML = `R$ ${val.preco.toFixed(2)}`;
//     document.getElementById('img').setAttribute('src', val.imagemProduto);
 
//     // Adicionar um evento de clique ao botão de adicionar ao carrinho
//     const botaoAdicionarAoCarrinho = document.getElementById('button');
//     botaoAdicionarAoCarrinho.addEventListener('click', () => {
//         adicionarAoCarrinho(id);
//     });
// } else {
//     console.error('Produto não encontrado');
// }


