<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("ID_FACTURA, NUME_DOC, CODI_ESTADO, VALOR_FAC, FECHA_FAC from factura");
$facturas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($facturas);