'use strict';
var dbConn = require('./../../config/db.config');
//Factura objecto crear
var Factura = function(factura){
  this.numero_doc         = factura.numero_doc;
  this.codigo_estado      = factura.codigo_estado;
  this.valor_fac          = factura.valor_fac;
  this.fecha_fac          = new Date();

};
Factura.create = function (newFac, result) {
dbConn.query("INSERT INTO factura set ?", newFac, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Factura.findById = function (id, result) {
dbConn.query("Select * from factura where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Factura.findAll = function (result) {
dbConn.query("Select * from factura", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('factura : ', res);
  result(null, res);
}
});
};
Factura.update = function(id, factura, result){
dbConn.query("UPDATE factura SET NUME_DOC = ?, CODI_ESTADO = ?, VALOR_FAC = ?, FECHA_FAC = ? WHERE ID_FACTURA = ?", [factura.numero_doc,factura.codigo_estado,factura.valor_fac,factura.fecha_fac, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Factura.delete = function(id, result){
dbConn.query("DELETE FROM factura WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Factura;