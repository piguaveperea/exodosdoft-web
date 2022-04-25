function About(){
    return(
        <div className="container mx-auto" >
            <h1 className="text-4xl lg:text-5xl font-bold" >Sobre Nosotros</h1>
            <p>
                Somos una empresa  en el desarrollo y diseño de sitios web. 
                Tambien ofresesmos el servicios de aplicaciones para moviles y escritorios
            </p>
            <div className="grid grid-cols-3">
                <div>
                    <h3>Desarrollo de aplicaiones Web</h3>
                </div>
                <div>
                    <h3>Desarrollo de aplicaciones de escritorios</h3>
                </div>
                <div>
                    <h3>Desarrollo de aplicaciones en Android</h3>
                </div>
            </div>
        </div>
    )
}

export default About