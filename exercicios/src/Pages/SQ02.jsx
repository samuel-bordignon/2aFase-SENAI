import Adivinhacao from '../components/SQ02/Adivinhacao'
import DiaSemana from '../components/SQ02/DiaSemana'
import ParImparSQ02 from '../components/SQ02/ParImparSQ02'
import SenhaSegura from '../components/SQ02/SenhaSegura'
import ValidaIdade from '../components/SQ02/ValidaIdade'
import "../style/cardsContainer.css"


function SQ02() {
    return (
        <div className='SQ02-container'>
            <h1 className='titulo'>Side Quests (02)</h1>

            <div className='cards-container'>
                <ValidaIdade />
                <Adivinhacao />
                <DiaSemana />
                <ParImparSQ02 />
                <SenhaSegura />

            </div>
        </div>
    )
}

export default SQ02
