
import { useState } from "react"
function Exemplos() {

    const [botaoNove, setbotaoNove] = useState(9)
    const [botaoOito, setbotaoOito] = useState(8)
    const [botaoSete, setbotaoSete] = useState(7)
    const [botaoSeis, setbotaoSeis] = useState(6)
    const [botaoCinco, setbotaoCinco] = useState(5)
    const [botaoQuatro, setbotaoQuatro] = useState(4)
    const [botaoTres, setbotaoTres] = useState(3)
    const [botaoDois, setbotaoDois] = useState(2)
    const [botaoUm, setbotaoUm] = useState(1)
    const [display, setDisplay] = useState("")

    return (
        <div className="atividade-container">
            <div className="grid-num">
            <button className="botao-num" onClick={() => setDisplay(display + botaoNove)}>9</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoOito)}>8</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoSete)}>7</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoSeis)}>6</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoCinco)}>5</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoQuatro)}>4</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoTres)}>3</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoDois)}>2</button><br />
            <button className="botao-num" onClick={() => setDisplay(display + botaoUm)}>1</button><br />

            </div>
            <div className="grid-display">
            {display}

            </div>
        </div>

    )
}

export default Exemplos
