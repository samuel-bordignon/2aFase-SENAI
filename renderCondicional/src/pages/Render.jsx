import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import LogUser from '../components/LogUser'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import "./Render.css"

function Render() {
    const [adm, setAdm] = useState()
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] =useState(false)
    return (
        <div>
            <h1>Renderizar condicionais</h1>
            <div className='Render-container'>
                <button onClick={() => { setAdm(true) }}>ADM</button>
                <button onClick={() => { setAdm(false) }}>oriasseca</button>
                {adm && <PainelAdm />}
            </div>
            <div className='Render-container'>
                <button onClick={() => { setIdade(idade - 1) }}>-</button>
                {idade}
                <button onClick={() => { setIdade(idade + 1) }}>+</button>
                {idade >= 18 && <ProdutosParaMaiores />}
            </div>
            <div className='Render-container'>
                    <button onClick={()=>{setUsuario(true)}}>Logar</button>
                    <button onClick={()=>{setUsuario(false)}}>Deslogar</button>
                    { usuario ?  <LogUser /> : <Login /> }
            </div>
        </div>
    )
}

export default Render
