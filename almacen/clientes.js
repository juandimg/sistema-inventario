document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm');
    form.addEventListener('submit', addRow);
});

function addRow(event) {
    event.preventDefault();


    const codigo = document.getElementById('codigo').value;
    const nombreCliente = document.getElementById('nombrecliente').value;
    const correoCliente = document.getElementById('correocliente').value;
    const telefonoCliente = document.getElementById('telefonocliente').value;
    const direccionCliente = document.getElementById('direccioncliente').value;


    const tableBody = document.getElementById('clientTable').querySelector('tbody');

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${nombreCliente}</td>
        <td>${correoCliente}</td>
        <td>${telefonoCliente}</td>
        <td>${direccionCliente}</td>
    `;


    tableBody.appendChild(newRow);

  
    document.getElementById('clientForm').reset();
}
