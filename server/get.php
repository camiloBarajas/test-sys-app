<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
if (empty($_GET["idFactura"])) {
    exit("No hay id de factura");
}
$idMascota = $_GET["idFactura"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select ID_FACTURA, NUME_DOC, CODI_ESTADO, VALOR_FAC, FECHA_FAC from factura where ID_FACTURA = ?");
$sentencia->execute([$idFactura]);
$factura = $sentencia->fetchObject();
echo json_encode($factura);