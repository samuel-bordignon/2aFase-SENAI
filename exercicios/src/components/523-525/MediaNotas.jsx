import React from 'react'
import { useState } from 'react'

// 5.24 – Faça um programa que leia duas notas parciais obtidas por um 
// aluno qualquer numa disciplina qualquer ao longo de um semestre 
// qualquer, e calcule a sua média. De posse da média, esta deve ser 
// convertida em conceito que é o novo hype do momento na educação!
// A conversão deve seguir a regra descrita abaixo:
// Nota Conceito
// Entre ]9.0[ e [10.0] A
// Entre ]7.5[ e [9.0] B
// Entre ]6.0[ e [7.5] C
// Entre ]4.0[ e [6.0] D
// Entre [0.0] e [4.0] E
// O resultado deste programa deve ser um relatório contendo as notas do 
// aluno, sua média e o conceito atingido.

function MediaNotas() {
  const [resultado, setResultado] = useState('')
  const [ativo, setAtivo] = useState(false)

  function calculaMedia() {

    let nota1 = prompt('Digite a primeira nota')
    let nota2 = prompt('Digite a segunda nota')
    let media = (Number(nota1) + Number(nota2)) / 2

    if (media >= 9 && media <= 10) {
      setResultado(` Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media} | Conceito: A`)
    } else if (media >= 7.5 && media < 9) {
      setResultado(` Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media} | Conceito: B`)
    } else if (media >= 6 && media < 7.5) {
      setResultado(` Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media} | Conceito: C`)
    } else if (media >= 4 && media < 6) {
      setResultado(` Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media} | Conceito: D`)
    } else if (media >= 0 && media < 4) {
      setResultado(` Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media} | Conceito: F`)
    }
    setAtivo(true)
  }

  return (

    <div className='atividade-container'>
      <h1>Calculador de média escolar</h1>

      <button onClick={calculaMedia}>Verificar Número</button>

      <h3 className={ativo ? "visible" : "hidden"}>
        {resultado}
      </h3>

    </div>

  )
}

export default MediaNotas
