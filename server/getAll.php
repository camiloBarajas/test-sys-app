<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$bd = include_once "bd.php";
$sentencia = $bd->query("ID_FACTURA, NUME_DOC, CODI_ESTADO, VALOR_FAC, FECHA_FAC from factura");
$facturas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($facturas);