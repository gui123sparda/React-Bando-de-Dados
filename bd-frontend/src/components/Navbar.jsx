export default function NavBar({ onOpen , onSearch}) {
    const handleSearchChange = (event) =>{
        onSearch(event.target.value);
    };
    return (
        <>
            <div className="navbar bg-base-100 p-4">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">Usuarios</a>
                </div>
                <div className="navbar-center ">
                    <div className="form-control">
                        <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-24 md:w-auto"></input>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary" onClick={onOpen}>Adicionar</a>
                </div>
            </div>
        </>
    )
}