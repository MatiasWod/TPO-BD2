--1)
SELECT t.* FROM e01_cliente c JOIN e01_telefono t on c.nro_cliente = t.nro_cliente WHERE c.nombre = 'Wanda' AND c.apellido = 'Baker'
 

--2)
SELECT * FROM e01_cliente  c WHERE c.nro_cliente IN (SELECT f.nro_cliente FROM e01_factura f);


--3)
SELECT * FROM e01_cliente WHERE e01_cliente.nro_cliente NOT IN (SELECT e01_factura.nro_cliente FROM e01_factura);


--4) 
SELECT * FROM e01_producto p WHERE p.codigo_producto IN (SELECT df.codigo_producto FROM e01_detalle_factura df);


--5)
SELECT c.*, t.codigo_area, t.nro_telefono FROM e01_cliente c LEFT JOIN e01_telefono t ON c.nro_cliente = t.nro_cliente;
/*Si un cliente posee dos telefonos, aparecera en dos tuplas distintas, una con cada teléfono*/


--6)
SELECT c.*, COUNT(f.nro_cliente) as cant_facturas FROM e01_cliente c LEFT JOIN e01_factura f ON c.nro_cliente = f.nro_cliente GROUP BY c.nro_cliente;


--7) 
SELECT f.* FROM e01_cliente c JOIN e01_factura f on c.nro_cliente = f.nro_cliente
WHERE c.nombre = 'Pandora' AND c.apellido = 'Tate' 


--8) 
SELECT f.* FROM e01_factura f WHERE f.nro_factura IN (SELECT d.nro_factura FROM e01_detalle_factura d LEFT JOIN e01_producto p ON  d.codigo_producto = p.codigo_producto WHERE p.marca = 'In Faucibus Inc.' );


--9)
SELECT * FROM e01_telefono t INNER JOIN e01_cliente c ON c.nro_cliente = t.nro_cliente;


--10) 
SELECT c.nombre,c.apellido,f.total_con_iva FROM e01_cliente c JOIN e01_factura f ON c.nro_cliente = f.nro_cliente


