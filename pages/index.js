import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a Sendzap
        </h1>
        <p>Está é uma simples aplicação web para enviar mensagens via whatsapp anonimamente</p>
        <p>Siga o formato 551197XXXXXXX para o número</p>
      </main>

      <form onSubmit={numToSend}>
        <label htmlFor="num">Número</label>
        <input id="num" num="num" type="text" autoComplete="num" required />
        <button type="submit">Enviar</button>
      </form>

      <footer className={styles.footer}>
          By Akila and Bennet
      </footer>
    </div>
  )
}
