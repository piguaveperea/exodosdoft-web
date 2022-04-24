function Contactanos(){
    return(
        <div  className="container mx-auto">
            <h1 className="text-2xl font-semibold" >Contactanos</h1>
            <form className="flex flex-col w-80 p-4 border shadow bg-white rounded" >
                <div>
                    <label className="font-semibold">Nombre de compañia</label>
                    <input className="outline-none hover:border-blue-500 border py-2 w-full rounded px-2"  placeholder="Nombre de la Compañia" />
                </div>
                <div>
                    <label className="font-semibold">Correo electronico</label>
                    <input className="outline-none hover:border-blue-500 border py-2 w-full rounded px-2" placeholder="Correo electronico"  />
                </div>
                <div>
                    <label className="font-semibold">Mensaje</label>
                    <textarea className="outline-none hover:border-blue-500 border w-full rounded px-2 py-2" cols="5"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contactanos