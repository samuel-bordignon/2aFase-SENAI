import { useState } from 'react'

function SenhaSegura() {
    const [senha, setSenha] = useState('')
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [error, setError] = useState(false)

    const verificaSenha = () => {
        let listaSenha = senha.split('')
        if (listaSenha.length <= 0) {
            setResultado('A senha não pode ser vazia!')
            setError(true)
            setAtivo(false)
            return
        } else {
            if (listaSenha.length < 8) {
                setResultado('Senha não segura')
            } else {
                setResultado('Senha segura')
            }

        }
        setAtivo(true)
        setError(false)

    }

    return (
        <div className='atividade-container'>
            <div className='form-container'>
                <h2>Verificador de senha</h2>
                <input
                    type="password"
                    placeholder='Digite sua Senha'
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />

                <button className='btn-form' onClick={verificaSenha}>Verificar Senha</button>
                <div>
                    <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                        {resultado}
                    </h3>

                </div>
            </div>

        </div>
    )
}

export default SenhaSegura
