import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codeswear.com - Wear the Code</title>
        <meta name="description" content="Codeswear.com - Wear the Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Footer/>
    </div>
  )
}
