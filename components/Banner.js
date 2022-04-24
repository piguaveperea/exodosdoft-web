function Banner() {
    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <video autoPlay muted loop playsInline className='absolute w-full h-full object-cover' >
                <source src='assets/video/banner.mp4' type='video/mp4' ></source>
            </video>
            <div className='text-white drop-shadow-sm  text-center'>
                <h1 className='text-4xl font-extrabold'>ExodoSoft</h1>
                <p className="text-xl font-semibold" >Desarrollo de Web y Aplicaciones, Diseños modernos</p>
            </div>
        </div>
    )
}

export default Banner