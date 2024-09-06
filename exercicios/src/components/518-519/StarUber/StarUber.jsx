import "./StarUber.css"
import React, { useState } from 'react'

function StarUber() {
    const [resultado, setResultado] = useState()

    const calculaVelo = () => {
        let distancia = Number(prompt('Digite a distância do trajeto:'))

        let velocidadeLuz = 300000000
        let tempoCorrida = distancia / velocidadeLuz
        let tempoFinal, unidadeEscolhida

        let unidades = [
            { nome: "segundos", Valor: 1 },
            { nome: "minutos", Valor: 60 },
            { nome: "horas", Valor: 60 * 60 },
            { nome: "dias", Valor: 60 * 60 * 24 },
            { nome: "meses", Valor: 60 * 60 * 24 * 30 },
            { nome: "anos", Valor: 60 * 60 * 24 * 365 },
        ]

        unidades.forEach((unidade) => {
            console.log(unidade)
            if(tempoCorrida >= unidade.Valor){
                tempoFinal = tempoCorrida / unidade.Valor
                unidadeEscolhida = unidade.nome
            }
        })

        setResultado(`${(tempoFinal).toFixed(2)} ${unidadeEscolhida}`)
    }

    return (
        <div className='StarUber-container'>
            <h2>Atividade para ajudar o energúmeno do Juka a ganhar dinheiro, como uber, num futuro intergaláctico</h2>
            <button onClick={calculaVelo}>Calcular o tempo da corrida</button>
            <h3>Tempo total da corrida: {resultado}.</h3>
        </div>
    )
}

export default StarUber