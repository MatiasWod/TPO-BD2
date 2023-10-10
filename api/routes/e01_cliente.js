const { Router, response } = require("express");
const pool = require("../database");
const router = Router();

// POST route to insert data
router.post("/insert", (request, response) => {
    const { nro_cliente, nombre, apellido, direccion, activo } = request.body; // Assuming you have a JSON request body with name and email fields

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
    const { nro_cliente } = request.body; // Assuming you have a JSON request body with name and email fields

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
    const { nro_cliente, nombre, apellido, direccion, activo } = request.body;  // Assuming you have a JSON request body with name and email fields

    if (!nro_cliente) {
        response.status(400).json({ error: "nro_cliente es requerido para actualizar al cliente de la tabla." });
        return;
    }

    // SQL query to insert data into the e01_cliente table
    const query = "UPDATE e01_cliente SET nombre = $2, apellido = $3 , direccion = $4, activo = $5 WHERE nro_cliente = ($1)";
    const values = [nro_cliente,nombre,apellido,direccion,activo];

    pool.query(query, values, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(201).json({ message: "Cliente actualizado correctamente." });
        }
    });
});


module.exports = router;