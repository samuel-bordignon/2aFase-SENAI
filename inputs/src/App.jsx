import { useState } from 'react'
import './App.css'
import DeMaior from './components/DeMaior'
import DeMeno from './components/DeMeno'

function App() {
  const [inputIdade, setInputIdade] = useState()
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)

  function validarIdade() {
    if (inputIdade < 18) {
      setMaior(false)
      setMenor(true)
    } else {
      setMenor(false)
      setMaior(true)
    }
  }

  return (
    <>
      <h1>Inputs</h1>
      Idade: <input type="number" className='formularios'
        value={inputIdade}
        onChange={(event) => { setInputIdade(event.target.value) }}
      />
      <button onClick={validarIdade}>Validar Idade</button>

{maior && <DeMaior />}
{menor && <DeMeno />}
    </>
  )
}

export default App
