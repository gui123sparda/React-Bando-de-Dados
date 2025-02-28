import axios from 'axios';
import { useState,useEffect } from 'react';
export default function TableList({handleOpen}) {
    const [tableData,setTableData] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=> {
        const fetchData = async() =>{
            try {
                const response = await axios.get('http://localhost:3000/api/usuarios');
                setTableData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    },[]);

    const usuarios = [
        { id: "1", nome: "Guilherme", email: "guilherme@email.com", senha: "gui123", tipo: "Candidato" },
        { id: "2", nome: "Wesley", email: "wesley@email.com", senha: "wesley123", tipo: "Candidato" },
        { id: "3", nome: "Vinicius", email: "vinicius@email.com", senha: "vini123", tipo: "Candidato" },
        { id: "4", nome: "Luiz", email: "luiz@email.com", senha: "luiz123", tipo: "Candidato" },
    ]

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {/* row 1 */}
                        {tableData.map((usuario) => (
                            <tr>
                                <th>{usuario.id}</th>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.senha}</td>
                                <td>{usuario.tipo}</td>
                                <td>
                                    <button onClick={()=>handleOpen('edit')} className="btn btn-secundary">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-accent">Delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}