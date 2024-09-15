import Cofrinho from '../components/523-525/cofrinho'
import MediaNotas from '../components/523-525/MediaNotas'
import ValorVenda from '../components/523-525/ValorVenda'
import "../style/cardsContainer.css"


function Atividade523_525() {
  return (
    <div className='.a523-525-container'>
      <h1 className='titulo'>Atividdades 523-525</h1>
      <div className='cards-container'>
        <Cofrinho />
        <MediaNotas />
        <ValorVenda />
      </div>
    </div>
  )
}

export default Atividade523_525
