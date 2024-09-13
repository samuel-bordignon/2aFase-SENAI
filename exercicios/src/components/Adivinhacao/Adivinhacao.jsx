import { useState } from 'react'
import Acerto from './Acerto'
import Erro from './Erro'
import "./Adivinhacao.css"

function Adivinhacao() {

    const [erro, setErro] = useState(false)
    const [acerto, setAcerto] = useState(false)
    const [InputPalpite, setInputPalpite] = useState()
    const[numRandom, setNumRamdom] = useState(getRandom(11, 0))

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function verificaPalpite() {
        console.log(numRandom)

        if (InputPalpite != numRandom) {
            setAcerto(false)
            setErro(true)
            

        } else {
            setAcerto(true)
            setErro(false)
            setNumRamdom(getRandom(11,0))
            console.log(numRandom)
        }
    }

    return (

        <div className='Adivinhacao-container'>
            <h1>Jogo de Adivinhação</h1>

            <label htmlFor="">Digite seu palpite entre 10 e 0
             <input type="number" value={InputPalpite}onChange={(event) => { setInputPalpite(event.target.value) }}
            /></label>

            <button onClick={verificaPalpite}>Verificar Palpite</button>


            {acerto && <Acerto />}
            {erro && <Erro />}
        </div>
    )
}

export default Adivinhacao
