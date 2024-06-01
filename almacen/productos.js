document.addEventListener("DOMContentLoaded", function() {
    loadTable();
});

function addRow() {
    // Obtener los datos de los inputs
    var col1 = document.getElementById("col1").value;
    var col2 = document.getElementById("col2").value;
    var col3 = document.getElementById("col3").value;
    var col4 = parseFloat(document.getElementById("col4").value);
    var col5 = parseFloat(document.getElementById("col5").value);

    // Verificar que todos los campos estén llenos
    if (col1 && col2 && col3 && !isNaN(col4) && !isNaN(col5)) {
        // Calcular el valor de la columna 6 como col4 * col5
        var col6 = col4 * col5;

        // Obtener la tabla por su ID
        var table = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];

        // Crear una nueva fila
        var newRow = table.insertRow();

        // Crear y agregar las celdas para la nueva fila
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        var newCell6 = newRow.insertCell(5);

        newCell1.textContent = col1;
        newCell2.textContent = col2;
        newCell3.textContent = col3;
        newCell4.textContent = col4;
        newCell5.textContent = col5;
        newCell6.textContent = col6;

        // Guardar la fila en el almacenamiento local
        saveRow({ col1, col2, col3, col4, col5, col6 });

        // Limpiar los campos del formulario
        document.getElementById("dataForm").reset();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function saveRow(rowData) {
    // Obtener las filas actuales desde el almacenamiento local
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];

    // Agregar la nueva fila a los datos
    tableData.push(rowData);

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem("tableData", JSON.stringify(tableData));
}

function loadTable() {
    // Obtener las filas guardadas desde el almacenamiento local
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];

    // Obtener la tabla por su ID
    var table = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];

    // Agregar cada fila guardada a la tabla
    tableData.forEach(function(rowData) {
        var newRow = table.insertRow();

        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        var newCell6 = newRow.insertCell(5);

        newCell1.textContent = rowData.col1;
        newCell2.textContent = rowData.col2;
        newCell3.textContent = rowData.col3;
        newCell4.textContent = rowData.col4;
        newCell5.textContent = rowData.col5;
        newCell6.textContent = rowData.col6;
    });
}