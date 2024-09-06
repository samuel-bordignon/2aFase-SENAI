import { useState } from "react"

function ValorVenda() {
    const [resultado, setResultado] = useState()

    const calculaValorVenda = () => {
        let valorCusto  = Number(prompt('Digite o valor de custo do produto: '))
        let valorLucro
        let ValorVenda

        if(valorCusto >  20){
            valorLucro = valorCusto * 0.45
        }else{
            valorLucro = valorCusto * 0.3
        }
        
        ValorVenda = valorCusto + valorLucro
    }

  return (
    <div className='ValorVenda-container'>
      <h2>Atividade para calcular o valor de venda de um produto(de acordo com alguns parâmetros) </h2>
      <button onClick={calculaValorVenda}>Clique</button>
    </div>
  )
}

export default ValorVenda
