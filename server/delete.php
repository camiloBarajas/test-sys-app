<?php
header("Access-Control-Allow-Origin: http://localhost:4200 always");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idFactura"])) {
    exit("No hay id de facturas para eliminar");
}
$idFactura = $_GET["idFactura"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM factura WHERE ID_FACTURA = ?");
$resultado = $sentencia->execute([$idFactura]);
echo json_encode($resultado);