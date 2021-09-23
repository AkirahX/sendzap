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
    if(Object.keys(tamanhoNumero).length >= 14){
      alert('Número inválido, se crê que o número esteja correto entre em contato com o suporte.')
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
        <script data-ad-client="ca-pub-8097473106118097" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
              <h1>Padrão para o número</h1>
          <p>Lembre-se de seguir o mesmo padrão útilizado<br/>
            no Whatsapp, para que não haja erros copie<br/>
            diretamente do perfil do usuário para qual<br/>
            vai enviar a mensagem, se o número principal<br/>
            (depois do DDD) tiver menos que 9 dígitos<br/>
            coloque-o após o DDD.
            <br/><br/>
            O número não deve conter caracteres especiais,<br/>
            remova espaços, indicador de DDI (+) e traços<br/>
            que possam ter, o número deve ficar assim:<br/>
            5511973584242</p>
          <h1>Modo de uso</h1>
          <p>
          Para utilizar nossa ferramente é bem simples<br/>
          basta colocar o número no formato correto, que<br/>
          foi explicado acima, escrever sua mensagem, clicar<br/>
          em enviar e confirmar, se voltar diretamente para<br/>
          a página inicial significa que tudo deu certo e<br/>
          sua mensagem foi enviada ao destinatário.
          </p>
          <h1>Tecnologias útilizadas</h1>
          <p>
          Para a construção desta ferramente<br/>
          utilizamos apenas 3 tecnologias,<br/>
          sendo elas <a>React</a>, <a>NextJs</a><br/>
          e <a>NodeJS</a> para a API de envio.
          <br/><br/>
          Para a parte visual HTML e CSS.
          </p><h1>Conhecimento adquirido</h1>
          <p>
          No percurso desse projeto aprendemos<br/>
          o básico de Next e React, portanto não<br/>
          é um projeto perfeito, está muito longe disto<br/>
          bugs e erros são inevitáveis, se o tempo<br/>
          nos permitir iremos estar sempre melhorando<br/>
          o sistema em si, em busca de sempre atende-los bem.
          </p>
        </div>
      </div>

      
  )
}

export default Home