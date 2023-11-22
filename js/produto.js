import { catalogoProdutos } from "./data.js";
import { findItem, carregaProduto, addCarrinho, cartIndicator} from "./funcoes.js";
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))

if (listaCompras == null){
    listaCompras = []
}

let Id = localStorage.getItem("IdProd")
let item = findItem(catalogoProdutos,Id)
carregaProduto(item)
addCarrinho(listaCompras,item,Id)
cartIndicator(listaCompras)

