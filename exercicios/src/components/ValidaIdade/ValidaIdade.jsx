import React from 'react'
import { useState } from 'react'
import DeMaior from './DeMaior'
import DeMeno from './DeMeno'
import "./ValidaIdade.css"

function ValidaIdade() {
    const [inputIdade, setInputIdade] = useState()
    const [maior, setMaior] = useState(false)
    const [menor, setMenor] = useState(false)

    function validarIdade() {
        if (inputIdade < 18) {
            setMaior(false)
            setMenor(true)
        } else {
            setMenor(false)
            setMaior(true)
        }
    }

    return (
        <div className='ValidaIdade-container'>
            <h1>Validador de idade</h1>
            <label htmlFor="">Idade: <input type="number" className='formularios'
            value={inputIdade}
            onChange={(event) => { setInputIdade(event.target.value) }}
            /></label>
            
                
            <button onClick={validarIdade}>Validar Idade</button>

            {maior && <DeMaior />}
            {menor && <DeMeno />}
        </div>
    )
}

export default ValidaIdade
