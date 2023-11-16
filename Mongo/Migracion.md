Migracion de datos:
Primero lo que hicimos fue exportar las tablas que teniamos en Postgresql en formato .JSON desde la aplicacion PGAdmin que tenia una opcion de exportar tablas, hicimos esto para cada una de las 5 tablas presentes en este trabajo practico.

Luego, desde la consola de MongoDB, corrimos el siguiente comando para cada archivo .json de cada tabla correspondiente
```
mongoimport --db mydb --collection e01_cliente--type json --headerline --file e01_cliente.json 
```