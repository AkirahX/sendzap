import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    const numToSend = async event => {
      event.preventDefault()
  
      const response = await fetch('http://192.95.46.251:3333/sendText', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                sessionName: "senzap", 
                number: `${event.target.num.value}`,
                text:"Hey, nice dick bro!\n\nEntre já qui: https://sendzap.in"
            }
        )
      });
      const content = await response.json();

      console.log(content);
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sendzap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a Sendzap
        </h1>
      </main>

      <form onSubmit={numToSend}>
      <label htmlFor="num">Número</label>
      <input id="num" num="num" type="text" autoComplete="num" required />
      <button type="submit">Enviar</button>
    </form>

      <footer className={styles.footer}>
          Powered by Nify Tech
      </footer>
    </div>
  )
}
