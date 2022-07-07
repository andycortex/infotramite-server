const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/user.routes')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        // Middleawares
        this.midleares();
        // Rutas de mi aplicacion
        this.routes();
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