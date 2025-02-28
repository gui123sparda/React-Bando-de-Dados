import './App.css'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModalForm from './components/Modalform'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const[isOpen,setIsOpen] = useState(false);
  const[modalMode,setModalMode] = useState('add');
  const[searchTerm,setSearchTerm] =useState('');
  const[usuarioData,setUsuarioData] = useState(null);
  const[tableData,setTableData] = useState([]);

  const fetchUsuarios = async () =>{
    try{
      const response = await axios.get('http://localhost:3000/api/usuarios')
      setTableData(response.data);
    }catch(err){
      setError(err.message);
    }
  };

  useEffect(()=>{
    fetchUsuarios();
  },[]);

  const handleOpen = (mode,usuario) => {
    setUsuarioData(usuario);
    setModalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = async (newUsuarioData) => {
    if(modalMode === 'add'){
      try {
        const response = await axios.post('http://localhost:3000/api/usuarios',newUsuarioData);
        console.log('Usuario Adicionado: ',response.data);
        setTableData((prevData) => [...prevData,response.data]);
      } catch (err) {
        console.error('Erro ao adicionar Usuario',err);
      }
      console.log('modal mode Add');
    }else{
      console.log('modal mode Edit');
      console.log('Atualizando Usuario com ID: ',usuarioData.id_usuario);
      try {
        const response = await axios.put(`http://localhost:3000/api/usuarios/${usuarioData.id_usuario}`, newUsuarioData);
                console.log('Usuario updated:', response.data);
                setTableData((prevData) =>
                  prevData.map((usuario) => (usuario.id_usuario === usuarioData.id_usuario ? response.data : usuario))
                );
      } catch (error) {
          console.error('erro ao atualizar usuario',error);
      }
    }
  }

  return (
    < >
    
    <NavBar onOpen={()=>handleOpen('add')} onSearch={setSearchTerm}/>
    <TableList handleOpen={handleOpen} searchTerm={searchTerm}/>
    <ModalForm isOpen={isOpen} OnSubmit={handleSubmit}
    onClose={() => setIsOpen(false)}
    mode={modalMode}  usuarioData ={usuarioData}
    />
      
      
    </>
  )
}

export default App
