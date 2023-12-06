import { catalogoProdutos } from "./dados.js"; // importa o catalogo de produtos
import { carregaProdutos, handleClick } from "./funcoes.js"; // importa as funcoes que serao executadas na pagina PRODUTOS / CATALOGO
let listaCompras = JSON.parse(localStorage.getItem("carrinho"))
let gridProdutos = document.querySelector("#product") // Seleção do local onde o codigo HTML sera injetado

carregaProdutos(catalogoProdutos,gridProdutos); // função recebe uma lista de produtos, que será exibida nas paginas
handleClick() // adiciona o click nos cards de produto