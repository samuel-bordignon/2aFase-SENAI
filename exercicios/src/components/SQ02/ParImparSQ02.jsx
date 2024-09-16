import React from 'react'
import { useState } from 'react'

function ParImparSQ02() {
    const [inputNumero, setInputNumero] = useState('')
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)

    function verificaNumero() {
        const numero = Number(inputNumero)

        
        if (numero % 2 === 0) {
            setResultado('O número é par')
        } else if (numero % 2 !== 0) {
            setResultado('O número é ímpar')
        }
            
        
        setAtivo(true)
        setError(false)
        setInputNumero('')
    }

    return (
        <div className='atividade-container'>
            <div className='form-container'>
                <h2>Verificador de numero par e ímpar</h2>

                <input
                    type="number"
                    placeholder='Digite um número'
                    value={inputNumero}
                    onChange={(event) => setInputNumero(event.target.value)}
                />
                <button className='btn-form' onClick={verificaNumero}>Verificar Número</button>

                <div>
                    <h3 className={ativo ? "visible" : "hidden"}>
                        {resultado}
                    </h3>

                </div>
            </div>
        </div>
    )
}

export default ParImparSQ02
