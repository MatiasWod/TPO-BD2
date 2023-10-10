const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server fired up on port:${port}`);
});