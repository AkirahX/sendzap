import Head from 'next/head'

export async function getServerSideProps(context){
    const id = context.query.id

    const response = await fetch('http://192.95.46.251:3333/sendText', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                sessionName: "senzap", 
                number: id,
                text:"Hey, nice dick bro!\n\nEntre já qui: https://sendzap.in"
            }
        )
    });
    if(!response){
        return <div>err</div>
    }
    return {props: {
        id: id,
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