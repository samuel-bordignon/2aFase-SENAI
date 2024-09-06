import './App.css'
import StarUber from './components/518-519/StarUber/StarUber'
import Emprestimo from './components/529-531/Emprestimo/Emprestimo'
import Exemplos from './components/529-531/Exempos/Exemplos'
import Media from './components/529-531/Media/Media'
import ParImpar from './components/529-531/ParImpar/ParImpar'
import SinalizacaoNumeros from './components/529-531/SinalizacaoNumeros/SinalizacaoNumeros'


function App() {

  return (
    <>
    <div className='atividades-container'>
      <div className='a529-531-container'>
        <Emprestimo />
        <ParImpar />
        <SinalizacaoNumeros />
        <Media />
        <Exemplos />

      </div>

      <div className='a518-519-container'>
        <StarUber />

      </div>

    </div>
    </>
  )
}

export default App
