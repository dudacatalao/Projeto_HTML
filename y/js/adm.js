// let data = JSON.parse(localStorage.getItem("pedidos"));
// const resultadoDiv = document.getElementById('resultado');

// data.forEach(pedido => {
//     resultadoDiv.innerHTML += `<h2>Itens do Pedido ${pedido.id}:</h2>`;
//     resultadoDiv.innerHTML += '<ul>';

//     pedido.itens.forEach(item => {
//         resultadoDiv.innerHTML += '<hr>';
//         resultadoDiv.innerHTML += `<li>Título: ${item.nomeProduto}</li>`;
//         resultadoDiv.innerHTML += `<li>Quantidade: ${item.quantidade}</li>`;
//         resultadoDiv.innerHTML += `<li>Preço: $${item.preco.toFixed(2)}</li>`;
//         resultadoDiv.innerHTML += '<hr>';
//     });

//     resultadoDiv.innerHTML += '</ul>';
// });

let data = JSON.parse(localStorage.getItem("pedidos"));
const tbody = document.querySelector('tbody');

data.forEach(pedido => {
    pedido.itens.forEach(item => {
        const row = document.createElement('tr');

        const columns = [
            pedido.cliente,
            pedido.telefone,
            pedido.email,
            item.nomeProduto,
            item.quantidade,
            getStatusClass(pedido.status), // Função para obter a classe com base no status
            `$${item.preco.toFixed(2)}`,
            `$${(item.quantidade * item.preco).toFixed(2)}`
        ];

        columns.forEach(columnText => {
            const td = document.createElement('td');
            td.innerHTML = columnText;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });
});

// Função para obter a classe com base no status
function getStatusClass(status) {
    switch (status) {
        case 'Enviado':
            return 'enviado';
        case 'Cancelado':
            return 'cancelado';
        case 'Processando':
            return 'processando';
        default:
            return '';
    }
}
