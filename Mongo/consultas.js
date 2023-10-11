//Ejercicio 1
db.e01_cliente.aggregate([
    {
        $match: {
            nombre: 'Wanda',
            apellido: 'Baker'
        }
    },
    {
        $lookup: {
            from: "e01_telefono",
            localField: "nro_cliente",
            foreignField: "nro_cliente",
            as: "telefonos"
        }
    },
    {
        $unwind: "$telefonos"
    },
    {
        $replaceRoot: { newRoot: "$telefonos" }
    }
])


//Ejercicio 2
var facturaNumbers = db.e01_factura.distinct("nro_cliente");
db.e01_cliente.find({ nro_cliente: { $in: facturaNumbers } })


//Ejercicio 3
var facturaNumbers = db.e01_factura.distinct("nro_cliente");
db.e01_cliente.find({ nro_cliente: { $nin: facturaNumbers } })


//Ejercicio 4
var productoCodes = db.e01_detalle_factura.distinct("codigo_producto");
db.e01_producto.find({ codigo_producto: { $in: productoCodes } })


//Ejercicio 5
db.e01_cliente.aggregate([
    {
        $lookup: {
            from: "e01_telefono",
            localField: "nro_cliente",
            foreignField: "nro_cliente",
            as: "telefonos"
        }
    },
    {
        $unwind: {
            path: "$telefonos",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $project: {
            _id: 0,
            nombre: 1,
            apellido: 1,
            codigo_area: "$telefonos.codigo_area",
            nro_telefono: "$telefonos.nro_telefono"
        }
    }
])


//Ejercicio 6
db.e01_cliente.aggregate([
    {
        $lookup: {
            from: "e01_factura",
            localField: "nro_cliente",
            foreignField: "nro_cliente",
            as: "facturas"
        }
    },
    {
        $unwind: {
            path: "$facturas",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $group: {
            _id: "$nro_cliente",
            nombre: { $first: "$nombre" },
            apellido: { $first: "$apellido" },
            cant_facturas: { $sum: 1 }
        }
    }
])


//Ejercio 7
db.e01_cliente.aggregate([
    {
        $match: {
            nombre: 'Pandora',
            apellido: 'Tate'
        }
    },
    {
        $lookup: {
            from: 'e01_factura',
            localField: 'nro_cliente',
            foreignField: 'nro_cliente',
            as: 'facturas'
        }
    },
    {
        $unwind: "$facturas"
    },
    {
        $replaceRoot: { newRoot: "$facturas" }
    }
])


//Ejercicio 8
db.e01_factura.find({nro_factura:{$in:db.e01_detalle_factura.distinct("nro_factura",{codigo_producto:{$in:db.e01_producto.distinct("codigo_producto",{marca:"In Faucibus Inc."})}})}})

//Ejercicio 9
db.e01_cliente.aggregate([
    {
        $lookup: {
            from: "e01_telefono",
            localField: "nro_cliente",
            foreignField: "nro_cliente",
            as: "telefonos"
        }
    },
    {
        $unwind: "$telefonos"
    }
])


//Ejercicio 10
db.e01_factura.aggregate([
    {
        $lookup: {
            from: "e01_cliente",
            localField: "nro_cliente",
            foreignField: "nro_cliente",
            as: "cliente"
        }
    },
    {
        $unwind: "$cliente"
    },
    {
        $project: {
            _id: 0,
            nombre: "$cliente.nombre",
            apellido: "$cliente.apellido",
            total_con_iva: 1
        }
    }
])