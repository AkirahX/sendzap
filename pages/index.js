import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


function Home() {


  const numToSend = async event => {
    event.preventDefault()

    const res = await fetch(
      'http://192.95.46.251:3333/sendText',{
        body: JSON.stringify({
          sessionName: "senzap", 
          number: event.target.num.value,
          text: event.target.msg.value
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const result = await res.json()

    console.log(result.result)

    /*
    let tamanhoNumero = event.target.num.value
    if(Object.keys(tamanhoNumero).length <= 12){
      alert('Número inválido, deve ter exatamente 13 digitos, siga o exemplo ou visite a página de ajuda')
      return
    }
    if(Object.keys(tamanhoNumero).length >= 14){
      alert('Número inválido, se crê que o número esteja correto entre em contato com o suporte.')
      return
    }
    alert('Sua mensagem será envia assim que confirmar, após isso não terá como cancelar.')
    location.href = './s/' + event.target.num.value + "/" + `${event.target.msg.value}`

    */
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
              <br/><br/><a href="https://t.me/nifytech">Suporte</a> - <a href="creditos">Créditos</a>
              
              <GoogleReCaptchaProvider
                reCaptchaKey="6LeH9n4cAAAAAAYNdpuyC_ddjiFsbEBXcamoy2F6"
                ></GoogleReCaptchaProvider>
            </form>
          </div>
          
        
        </div>
        
      </div>

      
  )
}
//Right >>>>>>>>>>>>> <Image src={txt2} alt="Nifytech" width="500" height="300"/> 
//Left <<<<<<<<<<<<<<
export default Home

/*

<div className={styles.logo}>
        <Image src={logo} alt="Nify Tech"/>
        </div>

        <div className={styles.textRight}>
          <Image src={txt1} alt="Nifytech" width="500" height="300"/> 
          <Image src={txt2} alt="Nifytech" width="500" height="300"/>
          <Image src={txt3} alt="Nifytech" width="500" height="300"/> 
        </div><br/>
        <div className={styles.textLeft}>
          <Image src={txt4} alt="Nifytech" width="500" height="300"/> 
          <Image src={txt5} alt="Nifytech" width="500" height="300"/> 
          <Image src={txt6} alt="Nifytech" width="500" height="300"/> 
        </div>
        */
