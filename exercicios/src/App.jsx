import './App.css'
import Emprestimo from './components/Emprestimo/Emprestimo'
import Exemplos from './components/Exempos/Exemplos'
import Media from './components/Media/Media'
import ParImpar from './components/ParImpar/ParImpar'
import SinalizacaoNumeros from './components/SinalizacaoNumeros/SinalizacaoNumeros'


function App() {

  return (
    <>
      <Emprestimo />
      <ParImpar />
      <SinalizacaoNumeros />
      <Media />
      <Exemplos />
    </>
  )
}

export default App
