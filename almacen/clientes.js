document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm');
    form.addEventListener('submit', addRow);
});

function addRow(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const codigo = document.getElementById('codigo').value;
    const nombreCliente = document.getElementById('nombrecliente').value;
    const correoCliente = document.getElementById('correocliente').value;
    const telefonoCliente = document.getElementById('telefonocliente').value;
    const direccionCliente = document.getElementById('direccioncliente').value;

    // Get the table body
    const tableBody = document.getElementById('clientTable').querySelector('tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Create and append cells to the row
    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${nombreCliente}</td>
        <td>${correoCliente}</td>
        <td>${telefonoCliente}</td>
        <td>${direccionCliente}</td>
    `;

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form
    document.getElementById('clientForm').reset();
}