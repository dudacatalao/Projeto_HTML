import { catalogoProdutos } from "./dados.js"; // importa o catalogo de produtos
import { carregaProdutos, handleClick,cartIndicator } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina PRODUTOS / CATALOGO
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))
let gridProdutos = document.querySelector("#catalogo-produtos") // Seleção do local onde o codigo HTML sera injetado
cartIndicator(listaCompras)
carregaProdutos(catalogoProdutos,gridProdutos); // função recebe uma lista de produtos, que será exibida nas paginas
handleClick() // adiciona o click nos cards de produto