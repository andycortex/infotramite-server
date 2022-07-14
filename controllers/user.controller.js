const { response } = require('express');
const Usuario = require('../models/usuario');

// Get
const GetAllUser = (req, res = response) =>{
    res.status(200).json({
        msg: 'get api - controller con modificaciones',
    })
}
// Post
const CreateUser = async(req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    await usuario.save();
    res.status(201).json({
        usuario,
    });
}
// Put
const GetById = (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'api put - controller',
        id: id,
    })
}
// Delete
const DeleteUser = (req, res) => {
    res.status(200).json({
        msg: 'delete api - controller',
    })
  }
// Patch
const UpdateUser = (req, res) => {
    res.status(200).json({
        msg: 'delete patch - controller',
    })
}

module.exports = {
    GetAllUser,
    CreateUser,
    UpdateUser,
    DeleteUser,
    GetById,
}