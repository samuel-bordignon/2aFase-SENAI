//5.30 - Dois copos meio cheios: Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.
import React, { useState } from 'react'
import "./ParImpar.css"

function ParImpar() {
    const [resultado, setResultado] = useState(0)

    const verificarParImpar = () => {
        let numero = Number(prompt("Digite um número:"))
        if (numero % 2 === 0) {
            setResultado("Par")
        } else {
            setResultado("Ímpar")
        }
    }
  return (
    <div className='ParImpar-container'>
        <h2>Exercicio para verificar se um número é par ou ímpar</h2>
        <button onClick={verificarParImpar}>Clique</button>
        <div>
            <h3>Resultado: {resultado}</h3>
        </div>
    </div>
  )
}

export default ParImpar
