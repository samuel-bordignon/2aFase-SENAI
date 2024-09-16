import React, { useState } from 'react'

function Calculadora() {
    const [botaoNove, setbotaoNove] = useState(9)
    const [botaoOito, setbotaoOito] = useState(8)
    const [botaoSete, setbotaoSete] = useState(7)
    const [botaoSeis, setbotaoSeis] = useState(6)
    const [botaoCinco, setbotaoCinco] = useState(5)
    const [botaoQuatro, setbotaoQuatro] = useState(4)
    const [botaoTres, setbotaoTres] = useState(3)
    const [botaoDois, setbotaoDois] = useState(2)
    const [botaoUm, setbotaoUm] = useState(1)
    const [botaoZero, setbotaoZero] = useState(0)

    const [botaoIgual, setbotaoIgual] = useState("=")
    const [botaoLimpar, setbotaoLimpar] = useState("C")

    const [botaoSoma, setbotaoSoma] = useState("+")
    const [botaoSubtracao, setbotaoSubtracao] = useState("-")
    const [botaoMultiplicacao, setbotaoMultiplicacao] = useState("*")
    const [botaoDivisao, setbotaoDivisao] = useState("/")
    const [display, setDisplay] = useState("")

    return (
        <div className="atividade-container" id='container-calculadora'>
            <div className="display-container">
                {display}

            </div>
            <div className='grid-all-key'>
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
                    <button className="botao-num" onClick={() => setDisplay(display + botaoLimpar)}>C</button><br />
                    <button className="botao-num" onClick={() => setDisplay(display + botaoZero)}>0</button><br />
                    <button className="botao-num" onClick={() => setDisplay(display + botaoIgual)}>=</button><br />

                </div>
                <div className='grid-op'>
                    <button className="botao-op" onClick={() => setDisplay(display + botaoSoma)}>+</button><br />
                    <button className="botao-op" onClick={() => setDisplay(display + botaoSubtracao)}>-</button><br />
                    <button className="botao-op" onClick={() => setDisplay(display + botaoMultiplicacao)}>*</button><br />
                    <button className="botao-op" onClick={() => setDisplay(display + botaoDivisao)}>/</button><br />
                </div>
            </div>
        </div>

    )
}

export default Calculadora
