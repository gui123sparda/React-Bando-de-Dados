import { query } from "../db.js";

export const getUsuarios = async() => {
    const{rows} = await query ('SELECT * FROM usuario');
    return rows;
}

export const createUsuario = async(usuarioData) => {
    const{nome,email,senha,tipo} = usuarioData;

    const{rows} = await query (
        `CALL ADICIONAR_USUARIO($1,$2,$3,$4) RETURNING *;`,
        [nome,email,senha,tipo]
    );
    return rows[0];
}