<?php
$servidor = 'localhost';
$BD = 'inventario';
$usuario = 'root';
$password= '';

$conectar = new PDO("mysql: server=$servidor; dbname=$BD", $usuario, $password);

?>