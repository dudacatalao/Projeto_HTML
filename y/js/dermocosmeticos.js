import { catalogoProdutos } from "./dados.js" // importa o catalogo de produtos
import { carregaProdutos2, handleClick} from "./funcoes.js"; // importa as funcoes que serao executadas na pagina home

let listaCompras = JSON.parse(localStorage.getItem("carrinho"))
let produtoHome = catalogoProdutos.filter(produto => produto.categoria == "Dermocosméticos") // lista de produtos filtrada pela categoria home
let gridProdutos = document.querySelector(".grid2") // Seleção do local onde o codigo HTML sera injetado

carregaProdutos2(produtoHome,gridProdutos);
handleClick() // adiciona o click nos cards de produto



