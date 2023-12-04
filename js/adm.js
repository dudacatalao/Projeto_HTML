let resultadoDiv = document.getElementById('resultado');

// Supondo que você tenha uma variável 'pedidos' definida no escopo global ou disponível aqui
let pedidos = JSON.parse(localStorage.getItem("pedidos"));

// Certifique-se de que 'pedidos' é uma array antes de percorrer
if (Array.isArray(pedidos)) {
    pedidos.forEach(pedido => {
        resultadoDiv.innerHTML += `<h2>Itens do Pedido ${pedido.id}:</h2>`;
        resultadoDiv.innerHTML += `<h3>Cliente ${pedido.endereco.nome}</h3>`;
        resultadoDiv.innerHTML += '<table border="1"><thead><tr><th>Produto</th><th>Quantidade</th><th>Preço Unitário</th></tr></thead><tbody>';

        pedido.itens.forEach(item => {
            resultadoDiv.innerHTML += '<tr>';
            resultadoDiv.innerHTML += `<td>${item.nomeProduto}</td>`;
            resultadoDiv.innerHTML += `<td>${item.quantidade}</td>`;
            resultadoDiv.innerHTML += `<td>R$${item.preco.toFixed(2)}</td>`;
            resultadoDiv.innerHTML += '</tr>';
        });

        resultadoDiv.innerHTML += '</tbody></table>';
    });
} else {
    resultadoDiv.innerHTML = '<p>Nenhum pedido encontrado.</p>';
}