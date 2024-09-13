import './App.css'
import { useState } from 'react'
import Atividade529_531 from './Pages/atividade529_531'
import Atividade518_519 from './Pages/Atividade518_519'
import Atividade523_525 from './Pages/Atividade523_525'
import ValidaIdade from './components/ValidaIdade/ValidaIdade'
import Adivinhacao from './components/Adivinhacao/Adivinhacao'


function App() {
  return (
    <>
    
      <div className='atividades-container'>
        <div className='SQ02'>
        <h1>SQ02</h1>
            <ValidaIdade/>
            <Adivinhacao />
        </div>

        <div className='a523-525-container'>
          <h1>Atividades da 523-525</h1>
          <Atividade523_525 />

        </div>
        <div className='a518-519-container'>
          <h1>Atividades da 518-519</h1>
          <Atividade518_519 />

        </div>
        <Atividade529_531 />
      
      </div>
    </>
  )
}

export default App
