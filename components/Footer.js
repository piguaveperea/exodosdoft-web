import Link from 'next/link'

function Footer(){
    return(
        <footer className="flex gap-8 items-center justify-center bg-black p-20 text-white">
            <Link href="/">Terminos </Link>
            <Link href="/privacidad">Privacidad</Link>
        </footer>
    )
}

export default Footer