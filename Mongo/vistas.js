//Ejercicio 1
db.createView(
    "facturas_ordenadas_por_fecha",
    "e01_factura",
    [
       { $sort: { fecha: -1 } } // Sort by 'fecha' in descending order
    ]
 );


 //Ejercicio 2
var productCodesInDetailFactura = db.e01_detalle_factura.distinct("codigo_producto");
db.createView(
   "productos_no_facturados",
   "e01_producto",
   [
      { $match: { codigo_producto: { $nin: productCodesInDetailFactura } } }
   ]
);