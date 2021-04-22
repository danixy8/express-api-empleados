const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.status(201).json({
        "msg": "get API - controlador"
    })
}

const usuariosPost = ( req, res = response) => {
    res.json({
        "msg": "post API - controlador"
    })
}

const usuariosPut = (req, res = response) => {
    res.json({
        "msg": "put API - controller"
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        "msg": "patch API - controller"
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        "msg": "delete API - controller" 
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
};