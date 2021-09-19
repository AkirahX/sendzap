
export async function getServerSideProps(context){
    const id = context.query.id

    return {props: {
        id: id
    }}
}

function sendToNumber(props){

        const response = fetch('http://192.95.46.251:3333/sendText', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                  sessionName: "senzap", 
                  number: props.id,
                  text:"Hey, nice dick bro!\n\nEntre já qui: https://sendzap.in"
              }
          )
        });
        return <div>Mensagem enviada para: {props.id}</div>
      }
      

export default sendToNumber