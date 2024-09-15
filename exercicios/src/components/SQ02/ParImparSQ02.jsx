import React from 'react'
import { useState } from 'react'

function ParImparSQ02() {
    const [inputNumero, setInputNumero] = useState('')
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [error, setError] = useState(false)

    function verificaNumero() {
        const numero = Number(inputNumero)

        if (numero % 2 === 0) {
            setResultado('O número é par')
        } else if (numero % 2 !== 0) {
            setResultado('O número é ímpar')
        } else {
            setResultado('Digite um número válido')
            setError(true)
            setAtivo(false)
            return
        }
        setAtivo(true)
        setError(false)
        setInputNumero('')
    }

    return (
        <div className='atividade-container'>
            <h1>Verificador de numero par e ímpar</h1>
            <div className='form-container'>
                <label>
                    Número <br />
                    <input
                        type="number"
                        placeholder='Digite um número'
                        value={inputNumero}
                        onChange={(event) => setInputNumero(event.target.value)}
                    />
                </label>
                <button className='btn-form' onClick={verificaNumero}>Verificar Número</button>
                <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                    {resultado}
                </h3>
            </div>
        </div>
    )
}

export default ParImparSQ02
