function addRow() {
    // Obtener valores del formulario
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombreproveedor').value;
    const correo = document.getElementById('correoproveedor').value;
    const telefono = document.getElementById('telefonoproveedor').value;
    const direccion = document.getElementById('direccionproveedor').value;

    // Validar que el correo tenga el signo '@'
    if (!correo.includes('@')) {
        alert('Por favor, ingrese un correo válido que contenga el signo @');
        return; // No continuar si el correo no es válido
    }

    // Crear una nueva fila y celdas
    const table = document.getElementById('proveedoresTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cellCodigo = newRow.insertCell(0);
    const cellNombre = newRow.insertCell(1);
    const cellCorreo = newRow.insertCell(2);
    const cellTelefono = newRow.insertCell(3);
    const cellDireccion = newRow.insertCell(4);

    // Asignar valores a las celdas
    cellCodigo.textContent = codigo;
    cellNombre.textContent = nombre;
    cellCorreo.textContent = correo;
    cellTelefono.textContent = telefono;
    cellDireccion.textContent = direccion;

    // Limpiar el formulario después de agregar la fila
    document.getElementById('proveedorForm').reset();
}