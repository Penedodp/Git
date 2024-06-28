<?php 
session_start();
if(!isset($_SESSION["perfil"])){header('Location: salir.php');}
if($_SESSION["perfil"] != 1){header('Location: salir.php');}

include "modelos/bbdd/usuario.php";


$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$direccion = $_POST["direccion"];
$localidad = $_POST["localidad"];
$user = $_POST["user"];
$password = $_POST["password"];
$perfil = $_POST["perfil"];


nuevo_usuario($nombre, $apellidos, $telefono, $email, $direccion, $localidad, $user, $password, $perfil);


header('Location: usuarios.php');
?>
