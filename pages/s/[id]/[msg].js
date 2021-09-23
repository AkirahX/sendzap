import Head from 'next/head'

export async function getServerSideProps(context){
    const id = context.query.id
    const msg = context.query.msg
    
    const response = await fetch('http://192.95.46.251:3333/sendText', {
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
            <Head>
                <meta httpEquiv='refresh' content='0; URL=/'></meta>
            </Head>

            <h1>Redirecionando</h1>
        </div>)
    
            
    
}
export default sendToNumber