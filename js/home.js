import { catalogoProdutos } from "./dados.js" // importa o catalogo de produtos
import { carregaProdutos2, handleClick} from "./funcoes.js"; // importa as funcoes que serao executadas na pagina home

let listaCompras = JSON.parse(localStorage.getItem("carrinho"))



let produtoHome = catalogoProdutos.filter(produto => produto.mostrarNaHome == true) // lista de produtos filtrada pela categoria home

//let produtoFerramenta = catalogoProdutos.filter(produto => produto.categoria === "Ferramentas") // lista de produtos filtrada pela categoria Ferramentas
let gridProdutos = document.querySelector(".grid") // Seleção do local onde o codigo HTML sera injetado
//let gridFerramenta = document.querySelector("#produtos-promocao") // Seleção do local onde o codigo HTML sera injetado

// função recebe uma lista de produtos e o local onde o HTML será injetado, que será exibida nas paginas

carregaProdutos2(produtoHome,gridProdutos);
//carregaProdutos(produtoFerramenta,gridFerramenta)
handleClick() // adiciona o click nos cards de produto



