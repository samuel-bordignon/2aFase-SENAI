import React from 'react'
import { useState } from 'react'

function MinMax715() {
  const [num, setNum] = useState('')

  function lerNuns() {
    if(num > 0){
      let max = num
      let numTemp = num
      while(numTemp != -1){
        if(numTemp > max){
          max = numTemp
        }

        numTemp = prompt('Digite um número')
      }
      alert(`Mínimo: ${min} Máximo: ${max}`)
    }else{
      alert('Digite um número válido')
    }
  }

  return (
    <div>
      <h1>Exercícios 7.15</h1>
      <p>Digite números inteiros positivos e finalize com "-1"</p>
      <input 
        type="number"
        placeholder='Digite um número'
        onChange={(e) => setNum(e.target.value)}
        value={num}
       />
       
       <button onClick={lerNuns}>Enviar</button>
    </div>
  )
}

export default MinMax715
