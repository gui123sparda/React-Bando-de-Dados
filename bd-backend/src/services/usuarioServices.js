import { query } from "../db.js";

export const getUsuarios = async() => {
    const{rows} = await query ('SELECT * FROM usuario');
    return rows;
}

export const createUsuario = async(usuarioData) => {
    const{nome,email,senha,tipo} = usuarioData;
    
    const{rows} = await query (
        `call adicionar_usuario($1,$2,$3,$4);`,
        [nome,email,senha,tipo]
    );
    return rows[0];
}

export const updateUsuario = async(usuarioData,usuarioId) => {
    const{nome,email,senha,tipo} = usuarioData;
    
    const{rows} = await query (
        `update usuario set nome=$1,email=$2,senha=$3,tipo=$4
        where id_usuario = $5 RETURNING *`,
        [nome,email,senha,tipo,usuarioId]
    );
    return rows[0];
}

export const deleteUsuario = async(usuarioId) => {
    const{rowCount} = await query(`DELETE from usuario where id_usuario = $1`,[usuarioId]);
    return rowCount>0;
}

export const searchUsuarios = async(searchTerm) => {
    const{rows} = await query(`select * from usuario where nome LIKE $1 or email LIKE $1`,[`%${searchTerm}%`]);
    return rows;
}

