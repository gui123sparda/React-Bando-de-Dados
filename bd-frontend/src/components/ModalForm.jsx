import { useEffect, useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, OnSubmit ,usuarioData}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const options =[
        {value: '',text:'Cargo'},
        {value: 'Candidato',text:'Candidato'},
        {value: 'Recrutador',text:'Recrutador'},
    ];
    const [tipo, setTipo] = useState(options[0].value);
    
    const handleTipo = e =>{
        console.log(e.target.value);
        setTipo(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const usuarioData = {nome,email,senha,tipo}
            await OnSubmit(usuarioData)
            onClose();
        } catch (err) {
            console.error("erro ao criar usuario",err);
        }
        
    }

    useEffect(()=>{
        if(mode==='edit' && usuarioData){
            setNome(usuarioData.nome);
            setEmail(usuarioData.email);
            setSenha(usuarioData.senha);
            setTipo(usuarioData.tipo);
        }else{
            setNome('');
            setEmail('');
            setSenha('');
            setTipo('');
        }
    },[mode,usuarioData]);

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Editar Usuario' : 'Adicionar Usuario'}</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        

                        <label className="input my-4 input-bordered flex items-center gap-2">
                            Nome
                            <input type="text" className="grow" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label className="input my-4 input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className="input my-4 input-bordered flex items-center gap-2">
                            Senha
                            <input type="text" className="grow" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </label>
                        <select  value={tipo} onChange={handleTipo} className="my-4 select select-bordered w-full max-w-xs">
                            {options.map(option => ( <option key={option.value} value={option.value}>{option.text}</option>))}

                        </select>
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <div className="gap-2">
                        <button type="submit" className="btn btn-success">{mode === 'edit' ? 'Salvar' : 'Adicionar'}</button>
                        </div>
                        
                    </form>
                </div>
            </dialog>
        </>
    )
}