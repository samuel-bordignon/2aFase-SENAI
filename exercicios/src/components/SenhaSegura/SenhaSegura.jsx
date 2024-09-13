import React from 'react'
import { useState } from 'react'

function SenhaSegura() {
    const [senha, setSenha] = useState()
    const [ruim, setRuim] = useState(false)
    const [bom, setBom] = useState(false)

    const verificasenha = () => {
        let listaSenha = senha.split('')
        if (listaSenha.length < 8) {
            setBom(false)
            setRuim(true)
        }else{
            setBom(true)
            setRuim(false)
        }
    }
    return (
        <div>
            <input type="text"
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
            />

        </div>
    )
}

export default SenhaSegura
