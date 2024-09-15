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
            <h1>Verificador de senha</h1>
            <div className='form-container'>
                <label>
                    Senha <br />
                    <input
                        type="password" 
                        
                        placeholder='Digite sua Senha'
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                </label>
                <button className='btn-form' onClick={verificaSenha}>Verificar Senha</button>
                <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                    {resultado}
                </h3>
            </div>

        </div>
    )
}

export default SenhaSegura
