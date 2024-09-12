import { useState } from 'react'
import './App.css'
import Boosters from './pages/Boosters'
import Home from './pages/home'
import Render from './pages/Render'
import TutorialMinecraft from './pages/TutorialMinecraft'

function App() {
  const [pagina, setPagina] = useState()
  
  return (
    <>
    <nav>
      <button onClick={() => {setPagina(<Home />)}}>Home</button>
      <button onClick={() => {setPagina(<Boosters />)}}>Boosters</button>
      <button onClick={() => {setPagina(<TutorialMinecraft />)}}>Tutorial Minecraft</button>
      <button onClick={() => {setPagina(<Render />)}}>Render</button>
    </nav>
    {pagina}
    </>
  )
}

export default App
