import { useState } from "react"
import Navbar from "../components/Navbar"

function Numeros712() {
  const [num, setNum] = useState('')
  const [numeros, setNumeros] = useState([])
  const [result, setResult] = useState(0)

  function lerNuns() {
    setNumeros([...numeros, num])
    setNum('')
  }

  function showResult() {
    let cont = 0
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > 100 && numeros[i] < 200) {
        cont++
      }
    }
    setResult(cont + "dos números digitados estão entre 100 e 200")
  }

  return (
    <div>
      <Navbar />
      <h1>Exercícios 7.12</h1>
      <input 
        type="number" 
        placeholder='Digite um numero'
        onChange={(e) => setNum(e.target.value)}
        value={num}
        />
      <button onClick={lerNuns}>Ler Numero digitado</button>
      <button onClick={showResult}>Mostrar Resultados</button>
      <button onClick={() => {setNumeros([''])}}>Limpar</button>
      {result && <p>{result}</p>}
    </div>
  )
}

export default Numeros712
