import './App.css'
import './style/atividadeContainer.css'
import './style/MenuPaginas.css'
import { useState } from 'react'
import Atividade518_519 from './Pages/Atividade518_519'
import Atividade523_525 from './Pages/Atividade523_525'
import MenuPaginas from './components/MenuPaginas/MenuPaginas'
import SQ02 from './Pages/SQ02'
import Atividade529_531 from './Pages/Atividade529_531'
import Atividade57 from './Pages/Atividade57'


function App() {
  const [paginaAtual, setPaginaAtual] = useState(1)
  const totalPaginas = 5

  const renderizaPagina = () => {
    switch (paginaAtual) {
      case 1:
        return <Atividade518_519 />
      case 2:
        return <Atividade523_525 />
      case 3:
        return <Atividade529_531 />
      case 4:
        return <SQ02 />
      case 5:
        return <Atividade57 />
      default:
        return <Atividade518_519 />
    }
  }

  return (
    <>
      <div className="atividades-container">

        {renderizaPagina()} {/* Renderiza o conteúdo da página atual */}


        <MenuPaginas
          totalPaginas={totalPaginas}
          paginaAtual={paginaAtual}
          setPaginaAtual={setPaginaAtual}
        />
      </div>
    </>
  )
}

export default App
