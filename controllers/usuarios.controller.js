const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre='sin nombre', apikey, page = 1, limit } = req.query;

    res.status(201).json({
        "msg": "get API - controlador",
        q, nombre, apikey, page, limit
    })
}

const usuariosPost = ( req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        "msg": "post API - controlador",
        nombre, edad
    })
}

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id

    res.json({
        "msg": "put API - controller",
        id
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