import axios from 'axios';
import { useState,useEffect } from 'react';
export default function TableList({handleOpen,searchTerm}) {
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

    const filteredData = tableData.filter(usuario => 
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())||
        usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id_usuario) => {
        const confirmDelete = window.confirm("Tem certeza que deseja deletar o usuario?");
        if(confirmDelete){
            try {
                await axios.delete(`http://localhost:3000/api/usuarios/${id_usuario}`);
                setTableData((prevData)=>prevData.filter(usuario => usuario.id !== id_usuario));
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <>
            {error && <div className="alert alert-error">{error}</div>}

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {/* row 1 */}
                        {filteredData.map((usuario) => (
                            <tr>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.senha}</td>
                                <td>{usuario.tipo}</td>
                                <td>
                                    <button onClick={()=>handleOpen('edit',usuario)} className="btn btn-secundary">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-accent" onClick={() => handleDelete(usuario.id_usuario)}>Delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}