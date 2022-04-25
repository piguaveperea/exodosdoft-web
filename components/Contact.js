function Contact() {
    return (
        <div className="flex min-h-screen pt-10 justify-center items-center flex-col bg-black">
            <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
            <h1 className="text-center  text-white text-4xl font-semibold">Contactanos</h1>
                <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]" >
                    <div className="flex flex-col">
                        <label className="text-gray-300 font-semibold mb-2 " >Nombres y Apellidos</label>
                        <input className="  text-white border bg-black border-gray-600 px-2 py-2 rounded outline-none hover:border-yellow-100 " type="text" maxLength="128" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-300 font-semibold mb-2 ">Correo electronico</label>
                        <input className=" text-white  border bg-black border-gray-600 px-2 py-2 rounded outline-none hover:border-yellow-100 " text="email" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-300  font-semibold mb-2 ">Mensaje</label>
                        <textarea maxLength="1048576" className=" text-white py-6 border bg-black border-gray-600 px-8 min-h-[16em] rounded outline-none hover:border-yellow-100 " />   
                    </div>
                    <div className="flex justify-center">
                        <button className="border border-yellow-200 rounded text-yellow-200 px-6 py-2" >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact