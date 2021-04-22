const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutesPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        
        // Rutas de aplicacion
        this.routes();
    }

    middlewares() {
        // directorio publico
        this.app.use(express.static('/public'));
        this.app.use(cors());

    }

    routes(){   
        this.app.use(this.usuariosRoutesPath , require('../routes/usuarios.routes'))

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });

    }

}

module.exports = Server;