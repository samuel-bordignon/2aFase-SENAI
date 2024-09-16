import { useState } from 'react'

function Adivinhacao() {

    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [InputPalpite, setInputPalpite] = useState()
    const [error, setError] = useState(false)
    const [numRandom, setNumRamdom] = useState(getRandom(11, 0))

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function verificaPalpite() {
        console.log(numRandom)

        const palpite = Number(InputPalpite)

        if (isNaN(palpite) || InputPalpite > 10 || InputPalpite < 0) {
            setResultado('Digite um número entre 0 e 10!')
            setError(true)
            setAtivo(false)
            return

        } else {
            if (InputPalpite != numRandom) {
                setResultado('Você errou 😢')
            } else {
                setResultado('Você acertou 😄 Vamos ver se você acerta denovo na próxima')
                setNumRamdom(getRandom(11, 0))
                console.log(numRandom)
            }
        }
        setAtivo(true)
        setError(false)
        setInputPalpite('')

    }

    return (

        <div className='atividade-container'>
            <div className='form-container'>
                <h2>Jogo de Adivinhação</h2>

                <input
                    type="number"
                    placeholder='Digite um palpite entre 10 e 0'
                    value={InputPalpite}
                    onChange={(event) => { setInputPalpite(event.target.value) }}
                />

                <button className='btn-form' onClick={verificaPalpite}>Verificar Palpite</button>
                <div>
                    <h3 className={error ? "error" : ativo ? "visible" : "hidden"}>
                        {resultado}
                    </h3>

                </div>

            </div>
        </div>
    )
}

export default Adivinhacao
