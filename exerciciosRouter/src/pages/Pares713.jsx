import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react"

function Pares173() {
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [pares, setPares] = useState([])
    
    
    function showPares() {
        let paresTemporarios = []
        for (let i = min; i <= max; i++) {
            if (i % 2 === 0) {
               paresTemporarios.push(i)
            }
        }
        setPares(paresTemporarios.join(', '))
        setMax('')
        setMin('')
    }

  return (
    <div>
      <Navbar />
        <h1>Exercícios 7.13</h1>
        <input 
            type="number"
            placeholder='Digite um número mínimo'
            onChange={(e) => setMin(e.target.value)}
            value={min}
         />
        <input type="number"
            placeholder='Digite um número máximo'
            onChange={(e) => setMax(e.target.value)}
            value={max}
        />
        <button onClick={showPares}>Mostrar Pares</button>
        {pares}
    </div>
  )
}

export default Pares173
