const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/user.routes');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Coneccion a la base de datos
        this.conectarDB();
        // Middleawares
        this.midleares();
        // Rutas de mi aplicacion
        this.routes();
    }
    async conectarDB () {
        await dbConnection();
    }
    midleares() {
        // CORS
        this.app.use( cors() );
        // Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Publico
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, userRouter)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port);
        })
    }
}

module.exports = Server;