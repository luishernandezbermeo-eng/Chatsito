import { useState, useEffect } from "react"
import { io} from "socket.io-client"

function App( ){
  const [inputMessage, setInputMessage] = useState("")
  const [ mensajeRecibido, setmensajeRecibido] = useState([])
  const [ socket, setSocket ] = useState() 

useEffect (()=>{
  const newSocket = io("localhost:3000")
  setSocket(newSocket) 

  newSocket.on("mensaje", (msg) => {
    setmensajeRecibido (msg) 
  })

  return( ) => {newSocket.disconnect() }
}, [])

  const handleSubmit = (e) => {
    e.preventDefault( )
    // como se envian los mensajes.....
    socket.emit("mensaje", inputMessage)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputMessage(e.target.value)}/> 
        <button type="submit">Enviar</button>
      </form>
      { mensajeRecibido.map ( mensaje => <div> {mensaje}</div>) }
      { mensajeRecibido } 
    </div>
  ) 
}

export default App