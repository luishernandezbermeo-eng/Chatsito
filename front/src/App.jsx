import { useState, useEffect } from "react"
import { io} from "socket.io-client"

function App( ){
  const [inputMessage, setInputMessage] = useState("")
  const [ mensajeRecibido, setmensajeRecibido] = useState([])
  const [ socket, setSocket ] = useState() 
  const [ user, setuser ] = useState("")

useEffect (()=>{
  const newSocket = io("localHost:3000")
  setSocket(newSocket) 

  newSocket.on("mensaje", (msg) => {
    setmensajeRecibido (msg) 
  })

  setuser(prompt("Ingrese su nombre:"))

  return( ) => {newSocket.disconnect() }
}, [])

  const handleSubmit = (e) => {
    e.preventDefault( )
    // como se envian los mensajes.....
    const hora = new Date().toLocaleTimeString()

    socket.emit("mensaje", {
      user,
      inputMessage,
      hora
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputMessage(e.target.value)}/> 
        <button type="submit">Enviar</button>
      </form>

      
      { mensajeRecibido.map ( mensaje => <div> {mensaje.user} ({mensaje.hora}): {mensaje.inputMessage}</div>) }
    </div>
  ) 
}

export default App