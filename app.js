require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const openApiConfigration = require("./docs/swagger");
const dbConnectNoSql = require('./config/mongo');
const { dbConnectMysql } = require('./config/mysql');
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_EN || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("stoarege"))

const port = process.env.PORT || 3000;

/**
 * Definir ruta de documentación
 */

 app.use('/documentation',
 swaggerUI.serve,
 swaggerUI.setup(openApiConfigration))

/**
 * Aqui invocamos a las rutas
 */

app.use("/api", require("./routes"))

if (NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/documentation`);
    })
}

if (ENGINE_DB === "nosql") { 
    dbConnectNoSql()
} 
else {
    dbConnectMysql();
}

module.exports = app;