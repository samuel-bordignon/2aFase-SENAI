import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Cadastro() {
    const [inputNome, setInputNome] = useState('')
    const {ContatinhoPremiumPlus, setContatinhoPremiumPlus, contatinhos, setContatinhos} = useContext(GlobalContext)


    function cadastrarContatinho() {
        // setContatinhoPremiumPlus(inputNome)
        setContatinhos([...contatinhos, inputNome])
        setInputNome('')
    }
  return (
    <div>
        <Navbar />
      <h1>Cadastre seu contatinho</h1>
      <div className='input-container'>
        <label htmlFor="">Nome</label>
        <input 
            type='text'
            value={inputNome}
            onChange={(e)=>{setInputNome(e.target.value)}}/>
            {ContatinhoPremiumPlus}
      </div>
      <button onClick={cadastrarContatinho}>Cadastrar Contatinho</button>
      <div className="contatinhos">
        {contatinhos.map((contatinho, index) => {
            return <p key={index}>{contatinho}</p>
        })}
      </div>
    </div>
  )
}

export default Cadastro
