COPY (SELECT * FROM e01_cliente) TO '/tmp/e01_cliente.csv' WITH CSV HEADER;
COPY (SELECT * FROM e01_detalle_factura) TO '/tmp/e01_detalle_factura.csv' WITH CSV HEADER;
COPY (SELECT * FROM e01_factura) TO '/tmp/e01_factura.csv' WITH CSV HEADER;
COPY (SELECT * FROM e01_producto) TO '/tmp/e01_producto.csv' WITH CSV HEADER;
COPY (SELECT * FROM e01_telefono) TO '/tmp/e01_telefono.csv' WITH CSV HEADER;