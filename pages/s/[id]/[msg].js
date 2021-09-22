import Head from 'next/head'

export async function getServerSideProps(context){
    const id = context.query.id
    const msg = context.query.msg
    /*
    if(msg === 'nevergonna'){

        const response = fetch('http://192.95.46.251:3333/sendText', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  sessionName: "senzap", 
                  number: id,
                  text:"Never Gonna"
              }
          )
      });
    }
    else if(msg === 'nicedick'){
        const response = fetch('http://192.95.46.251:3333/sendText', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  sessionName: "senzap", 
                  number: id,
                  text:"Nice dick"
              }
          )
      });
    }*/
    const response = fetch('http://192.95.46.251:3333/sendText', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  sessionName: "senzap", 
                  number: id,
                  text: msg
              }
          )
      });
    return {props: {
        id: id,
        msg: msg,
    }}
}
function sendToNumber(props){
        

        return (
            <div>
                <h1>Redirecionando</h1>
                <Head>
                    <meta httpEquiv='refresh' content='0; URL=/sucess/'></meta>
                </Head>
            </div>
            
        )
      }
      

export default sendToNumber

/*

 


                <GoogleReCaptchaProvider
                reCaptchaKey="6LeH9n4cAAAAAAYNdpuyC_ddjiFsbEBXcamoy2F6"
                ></GoogleReCaptchaProvider>
            */