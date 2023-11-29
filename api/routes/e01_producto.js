const { Router, response } = require("express");
const pool = require("../database");
const router = Router();

// POST route to insert data
router.post("/insert", (request, response) => {
    const { codigo_producto, marca, nombre, descripcion, precio, stock } = request.body;

    if (!codigo_producto || !marca || !nombre || !descripcion || !precio || !stock) {
        response.status(400).json({ error: "Todos los parámetros son requeridos para insertar el producto en la tabla." });
        return;
    }

    // SQL query to insert data into the e01_prodcuto table
    const query = "INSERT INTO e01_producto (codigo_producto, marca, nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [codigo_producto, marca, nombre, descripcion, precio, stock];

    pool.query(query, values, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(201).json({ message: "Producto agregado correctamente." });
        }
    });
});

router.put("/put", (request, response) => {
    const { codigo_producto, marca, nombre, descripcion, precio, stock } = request.body;  // Assuming you have a JSON request body with name and email fields

    if (!codigo_producto) {
        response.status(400).json({ error: "codigo_producto es requerido para actualizar el prodcuto de la tabla." });
        return;
    }

    // SQL query to insert data into the e01_cliente table
    const query = "UPDATE e01_producto SET marca = $2, nombre = $3 , descripcion = $4, precio = $5, stock = $6 WHERE codigo_producto = ($1)";
    const values = [codigo_producto, marca, nombre, descripcion, precio, stock ];

    pool.query(query, values, (err, res) => {
        if (err) {
            response.status(500).json({ error: err.message });
        } else {
            response.status(201).json({ message: "Producto actualizado correctamente." });
        }
    });
});

router.get("/", (request, response) => {
    pool.query("SELECT * FROM e01_producto", (err, res) => {
        if (err) response.end(err.message);
        response.json(res.rows);
    });
});

module.exports = router;