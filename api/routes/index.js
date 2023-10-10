const { Router } = require("express");
const clients = require("./e01_cliente");
const billing_details = require("./e01_detalle_factura");
const billing = require("./e01_factura");
const products = require("./e01_producto");
const telephones = require("./e01_telefono");

const router = Router();

router.use("/clients", clients);
router.use("/billing_details", billing_details);
router.use("/billing", billing);
router.use("/products", products);
router.use("/telephones", telephones);

module.exports = router;