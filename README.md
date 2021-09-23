# Sendzap - Front-end

Uma aplicação web para enviar mensagens de forma anônima via Whatsapp

## Está aplicação depende da [API WaSend](https://github.com/AkirahX/WppSend)
## Instalação



```bash
git clone https://github.com/AkirahX/sendzap
npm install
npm run dev
```

## Uso

```javascript
//pages/[id]/[msg].js

//Mude a sessão

const response = await fetch('http://suaApiUrl/sendText', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  sessionName: "SuaSessão", 
                  number: id,
                  text: msg
              }
          )
      });
    return {props: {
        id: id,
        msg: msg,
    }}
```
## Colaboradores
Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/82380880?v=4" width="100px;" alt="Avatar AkirahX"/><br>
        <sub>
          <b>AkirahX</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg" width="100px;" alt="Bennet"/><br>
        <sub>
          <b>Bennet</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Contribuição

Este é um projeto que não pretende receber atualizações dos desenvolvedores iniciais, toda pulll request será analisada o mais breve possível.



