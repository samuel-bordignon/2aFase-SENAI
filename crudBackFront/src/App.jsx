import './App.css'

function App() {

  return (
    <>
    <div className='conatiner'>
      <form className="form">
        <h1 className="title">Cadastri dos usuários</h1>
        <input name='nome' type="text" className="inpt-form" />
        <input name='idade' type="number" className="inpt-form" />
        <input name='email' type="email" className="inpt-form" />
        <button type='button'>salvar</button>
      </form>
    </div>
    {/* 
     */}
    </>
  )
}

export default App
