db.createCollection("E01_CLIENTE")

db.E01_CLIENTE.insertMany([
  {
    nro_cliente: 1,
    nombre: "John",
    apellido: "Doe",
    direccion: "123 Main St",
    activo: true
  },
  {
    nro_cliente: 2,
    nombre: "Alice",
    apellido: "Smith",
    direccion: "456 Elm St",
    activo: true
  },
])

db.createCollection("E01_DETALLE_FACTURA")

db.E01_DETALLE_FACTURA.insertMany([
  {
    nro_factura: 101,
    codigo_producto: 1,
    nro_item: 1,
    cantidad: 5.0
  },
  {
    nro_factura: 101,
    codigo_producto: 2,
    nro_item: 2,
    cantidad: 3.0
  },
])

db.createCollection("E01_FACTURA")

db.E01_FACTURA.insertMany([
  {
    nro_factura: 101,
    fecha: ISODate("2023-10-01"),
    total_sin_iva: 500.0,
    iva: 75.0,
    total_con_iva: 575.0,
    nro_cliente: 1
  },
  {
    nro_factura: 102,
    fecha: ISODate("2023-10-02"),
    total_sin_iva: 300.0,
    iva: 45.0,
    total_con_iva: 345.0,
    nro_cliente: 2
  },
])

db.createCollection("E01_PRODUCTO")

db.E01_PRODUCTO.insertMany([
  {
    codigo_producto: 1,
    marca: "Brand1",
    nombre: "Product1",
    descripcion: "Description1",
    precio: 100.0,
    stock: 50
  },
  {
    codigo_producto: 2,
    marca: "Brand2",
    nombre: "Product2",
    descripcion: "Description2",
    precio: 75.0,
    stock: 30
  },
])

db.createCollection("E01_TELEFONO")

db.E01_TELEFONO.insertMany([
  {
    codigo_area: 123,
    nro_telefono: 4567890,
    tipo: "H",
    nro_cliente: 1
  },
  {
    codigo_area: 456,
    nro_telefono: 9876543,
    tipo: "C",
    nro_cliente: 2
  },
])