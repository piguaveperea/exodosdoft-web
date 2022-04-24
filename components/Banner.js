import Image from "next/image"
function Banner() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video className="absolute w-full h-full object-cover " autoPlay loop muted playsInline >
                <source src="/assets/banner.m4v"  type="video/mp4; codecs=hvc1" />
                <source src="/assets/banner.webm"  type="video/webm; codecs=vp9" />
            </video> 
            <div className="p-12 font-bold z-10 text-center text-white">
                <h1 className="mb-6 text-4xl xl:text-5xl">ExodoSoft</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight ">
                    <span>Desarrollo de Web y Aplicaciones, Diseños modernos</span>
                </h2>
            </div>
        </div>
    )
}

export default Banner