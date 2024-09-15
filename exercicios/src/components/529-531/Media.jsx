
import React, { useState } from 'react'
function Media() {
    const [resultado, setResultado] = useState(0)

    const calcularMedia = () => {
        let numero1 = Number(prompt("Digite o primeiro nota: "))
        let numero2 = Number(prompt("Digite o segundo nota: "))
        let media = (numero1 + numero2) / 2
        setResultado(media)
    }

    return (
        <div className='atividade-container'>
            <h2>Exercicio para calcular as médias de 2 números</h2>
            <button onClick={calcularMedia}>Calcular</button><br />
            <div>
               <h3>Média: {resultado}</h3>
            </div>
        </div>
    )
}

export default Media
