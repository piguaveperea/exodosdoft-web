import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
        <video autoPlay muted loop playsInline className='absolute w-full h-full object-cover' >
          <source   src='assets/video/banner.mp4'type='video/mp4' ></source>
        </video>
        <div className='text-white drop-shadow-sm text-center'>
          <h1 className='text-4xl font-extrabold'>EXODOSOFT</h1>
          <hr/>
          <p>Bienvenido y listo para ayudarte</p>
        </div>
    </div>
  )
}
