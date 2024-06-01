<?php
  


include 'conexion.php';

// Obtener datos del formulario
$cedula = $_POST["cedula"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$password = $_POST["password"];
$telefono = $_POST["telefono"];
$opciones = $_POST["opciones"];


// Validar datos (puedes agregar más validaciones según tus necesidades)

// Preparar la consulta SQL (utilizando consultas preparadas)
$sql = "INSERT INTO usuarios (cedula, nombre, apellidos, correo, password,  telefono, opciones) VALUES ('$cedula', '$nombre ','$apellidos',' $correo', ' $password', ' $telefono', ' $opciones')";

// Preparar la sentencia
$stmt = $conectar->prepare($sql);


// Ejecutar la consulta
if ($stmt->execute()) {
    // Redireccionar si la inserción fue exitosa
    header('location:../registro.html');
} else {
    // Manejo de errores (puedes mostrar un mensaje de error o registrar el error en un archivo de registro)
    echo "Error al insertar datos: " . $stmt->error;
}

// Cerrar la conexión
$stmt->close();
$conectar->close();

$conectar->query($sql);
    header('location:../registro.html');
?>
