//5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, negativo ou nulo
import React, { useState } from 'react'

function SinalizacaoNumeros() {
    const [resultado, setResultado] = useState(0)

    const verificarSinal = () => {
        let numero = Number(prompt("Digite um número: "))
        if (numero > 0) {
            setResultado("Positivo")
        } else if (numero < 0) {
            setResultado("Negativo")
        } else {
            setResultado("Nulo")
    }
}

    return (
        <div className='atividade-container'>
            <h2>Exercicio para verificar o sinal dos números</h2>
            <button onClick={verificarSinal}>Clique</button>

            <div>
                <h3>Sinal: {resultado}</h3>
            </div>
        </div>
    )
}

export default SinalizacaoNumeros
