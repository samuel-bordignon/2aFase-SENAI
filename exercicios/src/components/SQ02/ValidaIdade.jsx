import { useState } from 'react'

function ValidaIdade() {
    const [inputIdade, setInputIdade] = useState()
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)

    function validarIdade() {
        if (inputIdade < 18) {
            setResultado('Você é de menor, ta ligado?🍼🍼🍼🍼🍼🍼🍼🍼🍼')
        } else {
            setResultado('Você é maior de idade 👴👵🧓')
        }
        setAtivo(true)
    }

    return (
        <div className='atividade-container'>
            <h1>Validador de idade</h1>
            <div className='form-container'>
                <label htmlFor="">Idade
                    <br /><input type="number" className='formularios' placeholder='Digite sua idade'
                        value={inputIdade}
                        onChange={(event) => { setInputIdade(event.target.value) }}
                    /></label>
                <button className='btn-form' onClick={validarIdade}>Validar Idade</button>
                <h3 className={ativo ? "visible" : "hidden"}>{resultado}</h3>

            </div>

        </div>
    )
}

export default ValidaIdade
