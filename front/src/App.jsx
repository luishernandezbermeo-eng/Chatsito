

function App( ){

  const [inputMessaje, setInputMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault( )
    // como se envian los mensajes.....
  }

  return (
    <div>
      <from onSubmit={handSubmit}>
        <input onChange={(e) => setInputMessage(e.target.value)}/> 
        <button type="submit">Enviar</button>
      </from>
    </div>
  ) 
}

export default App