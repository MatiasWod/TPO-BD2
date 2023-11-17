# TPO Base de Datos 2
## Integrantes
* Juan Segundo Arnaude - Legajo: 62184
* Bautista Ignacio Canevaro - Legajo: 62179
* Matias Wodtke - Legajo: 62098

## Requerimientos para PostgreSQL
- Instalar Docker Desktop para Windows o para Mac o Docker Engine en Linux
- Usar la terminal de línea de comandos para descargar la versión oficial de PostgreSQL
	```bash
	docker pull postgres
	```
- Levantar el contenedor
	```bash
	docker run --name MypostgreSQL -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
	```
- Conectarse a PostgreSQL vía psql:
	- Usando el psql que viene dentro del contenedor
		```bash
		docker run -it --rm --link MypostgreSQL:postgres postgres psql -h postgres -U postgres
		```

    - Desde el host

      ```bash
      psql -h localhost -p 5432 -U postgres
      ```

## Requerimientos para MongoDB
- Instalar Docker Desktop para Windows o para Mac o Docker Engine en Linux
- Descargar la versión oficial de MongoDB
	```bash
	docker pull mongo
	```
- Levantar el contenedor
	```bash 
	docker run --name Mymongo –p 27017:27017 -d mongo
	```
- Para levantar una MongoDB Shell dentro del contenedor
	```bash
	docker exec -it Mymongo mongosh
	```

## Creación e inserción de tablas en PostgreSQL
Se debe correr el siguiente archivo en una terminal de PostgreSQL
```bash
TPO_populator.sql
```

## Instrucciones de compilación y ejecución
Para correr la api, se debe ejecutar el siguiente archivo
```bash
app.js
```

## Comandos disponibles
### Clientes
Se puede dar de alta, baja y modificación de los ya existentes

### Productos
Se puede dar de alta y modificación de los ya existentes.

## Creación e inserción de colecciones en MongoDB
- Luego de haber creado e insertado las tablas en PostgreSQL, las exportamos a un .csv para luego agregarlas como colecciones a MongoDB. Para esto, se debe correr en la terminal de PostgreSQL el siguiente archivo
	```bash
	from_sql_table_to_csv_file.sql
	```

- Ahora, se debe copiar el archivo que se encuentra en docker a nuestra PC local, para ello, corremos los siguientes comandos desde la consola local
	```bash
	docker cp MypostgreSQL:/tmp/e01_cliente.csv <direccion-donde-guardar-los-csv-localmente>/e01_cliente.csv
	docker cp MypostgreSQL:/tmp/e01_detalle_factura.csv <direccion-donde-guardar-los-csv-localmente>/e01_detalle_factura.csv
	docker cp MypostgreSQL:/tmp/e01_factura.csv <direccion-donde-guardar-los-csv-localmente>/e01_factura.csv
	docker cp MypostgreSQL:/tmp/e01_producto.csv <direccion-donde-guardar-los-csv-localmente>/e01_producto.csv
	docker cp MypostgreSQL:/tmp/e01_telefono.csv <direccion-donde-guardar-los-csv-localmente>/e01_telefono.csv
	```

- En docker correr el siguiente comando para crear el directorio /usr/src/app
	```bash
	mkdir /usr/src/app
	```

- Pasar los archivos csv desde tu PC local al docker de MongoDB con los siguientes comandos
	```bash
	docker cp <direccion-donde-guardar-los-csv-localmente>/e01_cliente.csv Mymongo:/usr/src/app/e01_cliente.csv
	docker cp <direccion-donde-guardar-los-csv-localmente>/e01_detalle_factura.csv Mymongo:/usr/src/app/e01_detalle_factura.csv
	docker cp <direccion-donde-guardar-los-csv-localmente>/e01_factura.csv Mymongo:/usr/src/app/e01_factura.csv
	docker cp <direccion-donde-guardar-los-csv-localmente>/e01_producto.csv Mymongo:/usr/src/app/e01_producto.csv
	docker cp <direccion-donde-guardar-los-csv-localmente>/e01_telefono.csv Mymongo:/usr/src/app/e01_telefono.csv
	```

- Agregar los csv como colecciones a la base de datos de MongoDB
	```bash
	docker exec Mymongo mongoimport -d mydb -c e01_cliente --type csv --file /usr/src/app/e01_cliente.csv --headerline
	docker exec Mymongo mongoimport -d mydb -c e01_detalle_factura --type csv --file /usr/src/app/e01_detalle_factura.csv --headerline
	docker exec Mymongo mongoimport -d mydb -c e01_factura --type csv --file /usr/src/app/e01_factura.csv --headerline
	docker exec Mymongo mongoimport -d mydb -c e01_producto --type csv --file /usr/src/app/e01_producto.csv --headerline
	docker exec Mymongo mongoimport -d mydb -c e01_telefono --type csv --file /usr/src/app/e01_telefono.csv --headerline
	```

- Levantamos una shell de MongoDB
	```bash
	docker exec -it Mymongo mongosh
	```

- Corremos el siguiente comando para indicar qué base de datos usaremos para las consultas y ya estamos habilitados para realizar las consultas provistas en el repositorio
	```bash
	use mydb
	```