//5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from 'react'
import './Emprestimo.css'

function Emprestimo() {
    const [resultado, setResultado] = useState()

    const verificarEmprestimo = () => {
        let salario = Number(prompt("Digite o valor do salário: "))
        let emprestimo = Number(prompt("Digite o valor do empréstimo: "))
        let prestacoes = Number(prompt("Digite o número de prestações: "))
        let valorPrestacao = emprestimo / prestacoes
        let porcentagemSalario = salario * 0.3
        if(salario > 0 && emprestimo > 0 && prestacoes > 0) {
            if(valorPrestacao <= porcentagemSalario){
                setResultado("Empréstimo concedido")
            }
        }
    }
  return (
    <div className='Emprestimo-container'>
        <h2>Exercicio para verificar se um empréstimo pode ser concedido</h2>
        <button onClick={verificarEmprestimo}>Clique</button>
        <div>
            <h3>{resultado}</h3>
        </div>
    </div>
  )
}

export default Emprestimo
