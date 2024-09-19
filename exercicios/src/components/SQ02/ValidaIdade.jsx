import { useState } from 'react'

function ValidaIdade() {
    const [inputIdade, setInputIdade] = useState()
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [error, setError] = useState(false)

    function validarIdade() {
        
        if (isNaN(inputIdade) || inputIdade <= 0) {
            setResultado('Digite uma idade válida')
            setError(true)
            setAtivo(false)
            return
        } 
        
        if (inputIdade < 18) {
            setResultado('Você é de menor, ta ligado?🍼🍼🍼🍼🍼🍼🍼🍼🍼')
        } else {
            setResultado('Você é maior de idade 👴👵🧓')
        }
        setAtivo(true)
        setError(false)
        setInputIdade('')
    }

    return (
        <div className='atividade-container'>
            <div className='form-container'>
                <h2>Validador de idade</h2>

                <input type="number" className='formularios' placeholder='Digite sua idade'
                    value={inputIdade}
                    onChange={(event) => { setInputIdade(event.target.value) }}
                />
                <button className='btn-form' onClick={validarIdade}>Validar Idade</button>

                <div>
                    <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                        {resultado}
                    </h3>

                </div>
            </div>

        </div>
    )
}

export default ValidaIdade
