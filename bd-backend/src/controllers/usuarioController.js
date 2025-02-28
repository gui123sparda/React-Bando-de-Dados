import * as usuarioService from "../services/usuarioServices.js"

export const getUsuarios = async (req,res) =>{
    try {
        const usuarios = await usuarioService.getUsuarios();
        res.status(200).json(usuarios);
    } catch (err) {
        console.error('Erro ao Consultar Usuarios:',error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const createUsuarios = async (req,res) =>{
    try {
        const usuarioData = req.body;
        const newUsuario = await usuarioService.createUsuario(usuarioData);
        res.status(200).json(newUsuario);
    } catch (err) {
        console.error('Erro ao Cadastrar Usuario:',error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};