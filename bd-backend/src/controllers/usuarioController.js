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

export const updateUsuarios = async (req,res) =>{
    try {
        const usuarioId = req.params.id;
        const usuarioData = req.body;
        const updateUsuario = await usuarioService.updateUsuario(usuarioData,usuarioId);

        if(!updateUsuario){
            return res.status(404).json({message: 'Usuario Nao Encontrado'});
        }
        res.status(200).json(updateUsuario);
    } catch (err) {
        console.error('Erro ao Cadastrar Usuario:',err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const deleteUsuarios = async (req,res) =>{
    try {
        const usuarioId = req.params.id;
        const deleted=await usuarioService.deleteUsuario(usuarioId);
        
        if(!deleted){
            res.status(404).json({message: `usuario Nao encontrado`});
        }
        res.status(200).send();
    } catch (err) {
        console.error('Erro ao Deletar Usuario:',err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const searchUsuarios = async (req,res) =>{
    try {
        const searchTerm = req.query.q;
        const usuarios=await usuarioService.searchUsuarios(searchTerm);
        
        res.status(200).json(usuarios);
    } catch (err) {
        console.error('Erro ao Pesquisar Usuario:',err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};