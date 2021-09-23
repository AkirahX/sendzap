import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/icone.png'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Home() {

  const numToSend = async event => {
    event.preventDefault()
    let tamanhoNumero = event.target.num.value
    if(Object.keys(tamanhoNumero).length <= 12){
      alert('Número inválido, siga o formato DDI DDD XXXXXXXXX')
      return
    }
    alert('Sua mensagem será envia assim que confirmar, após isso não terá como cancelar.')
    location.href = './s/' + event.target.num.value + "/" + `${event.target.msg.value}`
  }
  return (
    <div>
      <Head>
        <title>Sendzap</title>
        <meta name="description" content="Sendzap, feito para sendar zapzap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nomegrande}>
            <h1>SendZap</h1>
          </div>
        <div className={styles.formulario}>

          <div className={styles.numeronome}>
            <form onSubmit={numToSend}>
              <label htmlFor="num">Número:</label>
              <input id="num" num="num" type="text" placeholder="5511XXXXXXXXX" minlenght="12" autoComplete="5511973584242" required /><br/>
              <br/>
              <label htmlFor="msg">Mensagem (Max: 300 caractéres):</label>
              <textarea id="msg" minlenght="1" maxLength="300" defaultValue="" required></textarea><br/>
              <input type="submit" value="Enviar" id="button"/>
              
              <GoogleReCaptchaProvider
                reCaptchaKey="6LeH9n4cAAAAAAYNdpuyC_ddjiFsbEBXcamoy2F6"
                ></GoogleReCaptchaProvider>
            </form>
          </div>
        </div>
        <div className={styles.logo}>
        <Image src={logo} alt="Nify Tech"/>
        </div>
        <div className={styles.whatis}>
          <br/><br/><br/><br/><br/>
          <h1>O que é SendZap?</h1>
          <p>SendZap é uma aplicação web com o<br/>
             intuíto de enviar mensagens via<br/>
            whatsapp de forma completamente anônima,<br/>
            nenhum dado do usuário será enviado<br/>
            com com a mensagem em si.</p>
            <br/><br/><br/>
            <h1>Mas para que criar isto?</h1>
          <p>Este é um projeto completamente<br/>
              para apreendizado dos desenvolvedores,<br/>
              não tem como intuíto ser algo realmente<br/>
              útil, mas com certeza não é algo totalmente<br/>
              inútil.</p>
        </div>
      </div>

      
  )
}

export default Home