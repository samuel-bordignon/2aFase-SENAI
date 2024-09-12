import { useState } from "react"
import "./ValorVenda.css"

function ValorVenda() {
  const [resultado, setResultado] = useState()

  const calculaValorVenda = () => {
    let valorCompra = Number(prompt('Digite o valor de compra do produto: '))
    let valorLucro
    let ValorVenda

    if (!valorCompra) {
      setResultado("O valor digitado é inválido")

    }else{
      if (valorCompra > 20) {
        valorLucro = valorCompra * 0.45

      } else {
        valorLucro = valorCompra * 0.3
        
      }
      ValorVenda = valorCompra + valorLucro
      setResultado(`Valor de venda: ${(ValorVenda).toFixed(2)}`)

    }
  }

  return (
    <div className='ValorVenda-container'>
      <h2>Atividade para calcular o valor de venda de um produto(de acordo com alguns parâmetros) </h2>
      <button onClick={calculaValorVenda}>Clique</button>
      <h3>{resultado}</h3>
    </div>
  )
}

export default ValorVenda
