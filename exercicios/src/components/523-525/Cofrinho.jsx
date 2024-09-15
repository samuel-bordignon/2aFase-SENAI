import React from 'react'
import { useState } from 'react'

function Cofrinho() {
    const [resultado, setResultado] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [valorProduto, setValorProduto] = useState('')
    const [valorCofrinho, setValorCofrinho] = useState('')

    const moedas = [
        { valor: 0.05, quantidade: 0, nome: "5 centavos" },
        { valor: 0.1, quantidade: 0, nome: "10 centavos" },
        { valor: 0.25, quantidade: 0, nome: "25 centavos" },
        { valor: 0.5, quantidade: 0, nome: "50 centavos" },
        { valor: 1.00, quantidade: 0, nome: "1 real" }]

    let valorTotal = 0

    function calculaValorCofrinho() {
        let valorProduto = Number(prompt('Qual o valor do produto?'))

        moedas.forEach(moeda => {
            moeda.quantidade = Number(prompt(`Quantas moedas de ${moeda.nome} o cofrinho tem?`))
            valorTotal += moeda.valor * moeda.quantidade
            console.log(valorTotal)
            console.log(moeda)
        })
        console.log(valorTotal)

        if (valorTotal >= valorProduto) {
            setResultado('Você tem dinheiro suficiente para comprar o produto! \n Valor total do cofrinho: ' + valorTotal + ' R$')
        } else {
            setResultado('Você não tem dinheiro suficiente para comprar o produto! \n Valor total do cofrinho: ' + valorTotal + ' R$')
        }
        setAtivo(true)
        valorTotal = 0
    }

    return (
        <div className='atividade-container'>
            <h1>Atividade do porquinho</h1>

            <button onClick={calculaValorCofrinho}>Verificar orçamento</button>

            <h3 className={ativo ? "visible" : "hidden"}>
                {resultado}
            </h3>

        </div>
    )
}

export default Cofrinho
