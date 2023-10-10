const { Router, response } = require("express");
const pool = require("../database");
const router = Router();

// POST route to insert data
router.post("/insert", (request, response) => {
    const { nro_cliente, nombre, apellido, direccion, activo } = request.body;

    if (!nro_cliente || !nombre || !apellido || !direccion || !activo) {
        response.status(400).json({ error: "Todos los parámetros son requeridos para insertar el cliente en la tabla." });
        return;
    }

    // SQL query to insert data into the e01_cliente table
    const query = "INSERT INTO e01_cliente (nro_cliente,nombre,apellido,direccion,activo) VALUES ($1, $2, $3, $4, $5)";
    const values = [nro_cliente,nombre,apellido,direccion,activo];

    pool.query(query, values, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(201).json({ message: "Cliente agregado correctamente." });
        }
    });
});

// POST route to insert data
router.delete("/delete", (request, response) => {
    const { nro_cliente } = request.body;

    if (!nro_cliente) {
        response.status(400).json({ error: "nro_cliente es requerido para borrar al cliente de la tabla." });
        return;
    }

    // SQL query to insert data into the e01_cliente table
    const query = "DELETE FROM e01_cliente WHERE nro_cliente = ($1)";
    const values = [nro_cliente];

    pool.query(query, values, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(201).json({ message: "Cliente eliminado correctamente." });
        }
    });
});

router.put("/put", (request, response) => {
    const { nro_cliente, nombre, apellido, direccion, activo } = request.body;

    if (!nro_cliente) {
        response.status(400).json({ error: "nro_cliente es requerido para actualizar al cliente de la tabla." });
        return;
    }

    let updateQuery = "UPDATE e01_cliente SET";
    const updateValues = [];

    if (nombre) {
        updateQuery += ` nombre = $2,`;
        updateValues.push(nombre);
    }

    if (direccion) {
        updateQuery += ` direccion = $3,`;
        updateValues.push(direccion);
    }

    // Remove the trailing comma, if any
    updateQuery = updateQuery.replace(/,\s*$/, "");

    updateQuery += " WHERE nro_cliente = $1";

    updateValues.unshift(nro_cliente); // Add nro_cliente as the first parameter

    console.log(updateQuery);

    pool.query(updateQuery, updateValues, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(200).json({ message: "Cliente actualizado correctamente." });
        }
    });
});





module.exports = router;