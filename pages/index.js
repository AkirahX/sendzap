import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/icone.png'

export default function Home() {
    const numToSend = async event => {
      event.preventDefault()
      location.href = './s/' + event.target.num.value

    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sendzap</title>
        <meta name="description" content="Sendzap, feito para sendar zapzap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.formulario}>
          <div className={styles.nomegrande}>
            <h1>SendZap</h1>
          </div>

          <div className={styles.numeronome}>
            <form onSubmit={numToSend}>
              <label htmlFor="num">Número</label>
              <input id="num" num="num" type="text" autoComplete="5511973584242" required />
              <input type="submit" value="Enviar" id="button"/>
            </form>
          </div>
        </div>
        <div className={styles.logo}>
        <Image src={logo} alt="Picture of the author" />
        </div>
      </div>
  )
}
