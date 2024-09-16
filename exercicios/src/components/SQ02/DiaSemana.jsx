import React from 'react'
import { useState } from 'react'

function DiaSemana() {
    const [diaInpt, setDiaInpt] = useState('')
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [error, setError] = useState(false)

    function verificaDia() {
        const dia = Number(diaInpt)

        switch (dia) {
            case 1:
                setResultado('Dia correspondente: Domingo 😍😍')
                break;
            case 2:
                setResultado('Dia correspondente: Segunda 😒😒')
                break;
            case 3:
                setResultado('Dia correspondente: Terça 😒')
                break;
            case 4:
                setResultado('Dia correspondente: Quarta 😒')
                break;
            case 5:
                setResultado('Dia correspondente: Quinta 😐😐')
                break;
            case 6:
                setResultado('Dia correspondente: Sexta 😁😁')
                break;
            case 7:
                setResultado('Dia correspondente: Sábado 😍')
                break;
            default:
                setResultado('Digite um número entre 1 e 7')
                setError(true)
                setAtivo(false)
                return
        }
        setAtivo(true)
        setError(false)
        setDiaInpt('')
    }

    return (
        <div className='atividade-container'>

            <div className='form-container'>
                <h2>Atividade para descobrir o dia da semana</h2>

                <input
                    type="number"
                    placeholder='Digite o dia da semana em numeral'
                    value={diaInpt}
                    onChange={(event) => { setDiaInpt(event.target.value) }}

                />
                <button className='btn-form' onClick={verificaDia}>Verificar Dia</button>
                <div>
                    <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                        {resultado}
                    </h3>

                </div>
            </div>

        </div>


    )
}

export default DiaSemana
