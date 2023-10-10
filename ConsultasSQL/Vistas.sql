--1)
CREATE VIEW facturas_ordenadas_por_fecha AS
SELECT * FROM e01_factura ORDER BY fecha DESC;


--2)
CREATE VIEW productos_no_facturados AS SELECT * FROM e01_producto p WHERE p.codigo_producto NOT IN (SELECT d.codigo_producto FROM e01_detalle_factura d);
