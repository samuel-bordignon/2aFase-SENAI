import './App.css'
import { useState } from 'react'
import StarUber from './components/518-519/StarUber/StarUber'
import ValorVenda from './components/523-525/ValorVenda/ValorVenda'
import Atividade529_531 from './Pages/atividade529_531'


function App() {
const [pagina, setPagina] =useState()
  return (
    <>
    
      <div className='atividades-container'>
        <div className='a523-525-container'>
          <h1>Atividades da 523-525</h1>
          <ValorVenda />

        </div>
        <div className='a518-519-container'>
          <h1>Atividades da 518-519</h1>
          <StarUber />

        </div>
        <Atividade529_531 />
      
      </div>
    </>
  )
}

export default App
