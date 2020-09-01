<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$jsonFactura = json_decode(file_get_contents("php://input"));
if (!$jsonFactura) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into factura(NUME_DOC, CODI_ESTADO, VALOR_FAC, FECHA_FAC) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonFactura->numero_doc, $jsonFactura->codigo_estado, $jsonFactura->valor_fac, $jsonFactura->fecha_fac]);
echo json_encode([
    "resultado" => $resultado,
]);