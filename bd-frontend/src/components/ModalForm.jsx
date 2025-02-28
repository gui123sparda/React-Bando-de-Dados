import { useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Editar Usuario' : 'Adicionar Usuario'}</h3>

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
                        <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="my-4 select select-bordered w-full max-w-xs">
                            <option>Candidato</option>
                            <option>Recrutador</option>

                        </select>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <div className="gap-2">
                        <button className="btn btn-success">{mode === 'edit' ? 'Salvar' : 'Adicionar'}</button>
                        </div>
                        
                    </form>
                </div>
            </dialog>
        </>
    )
}