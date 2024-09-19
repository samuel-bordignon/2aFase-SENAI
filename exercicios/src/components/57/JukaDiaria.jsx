/*5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
acabar...
Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
e fez check in, mas não conseguiu entender de forma alguma como o hotel 
calculava o valor da conta. Ele é meio burro, vocês sabem...
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00
De 6 a 10 diárias, R$90,00 por dia
A partir de 11 dias, sai R$80,00 por dia
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque 
teve um “envolvimento emocional” com a moça que trabalha no balcão
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue 
e apresente o valor final da conta e sua composição (os detalhes, 
pagamentos, descontos...) */

import React from 'react'
import { useState } from 'react'
import ResultJukaDiaria from './ResultJukaDiaria'

function JukaDiaria() {
    const [inputDiaria, setInputDiaria] = useState("")
    const [valorDiaria, setValorDiaria] = useState()
    const [valorTotal, setValorTotal] = useState()
    const [descontoMoca, setDescontoMoca] = useState()
    const [descontoConvenio, setDescontoConvenio] = useState()
    const [multa, setMulta] = useState()
    const [valorFinal, setValorFinal] = useState()
    const[infoRelatorio, setInfoRelatorio] = useState()

    function criarRelatorio() {
        let VariavelInfoRelatorio = {
            valorTotal: valorTotal,
            descontoMoca: descontoMoca,
            descontoConvenio: descontoConvenio,
            multa: multa,
            valorFinal: valorFinal
        }
        setInfoRelatorio(VariavelInfoRelatorio)
    }

    const calcularValorDiaria = () => {
        let dias = Number(inputDiaria)
    let valorDiaria

    if (dias <= 5) {
        valorDiaria = 100
    } else if (dias <= 10) {
        valorDiaria = 90
    } else {
        valorDiaria = 80
    }

    const valorTotal = dias * valorDiaria // Calcula o valor total após definir o valor da diária

    const descontoMoca = valorTotal * 0.1 // 10% de desconto
    const descontoConvenio = valorTotal * 0.15 // 15% de desconto
    const multa = 150 // multa fixa

    const valorFinal = valorTotal - descontoMoca - descontoConvenio + multa // Calcula o valor final

    // Atualize os estados com os novos valores
    setValorDiaria(valorDiaria)
    setValorTotal(valorTotal)
    setDescontoMoca(descontoMoca)
    setDescontoConvenio(descontoConvenio)
    setMulta(multa)
    setValorFinal(valorFinal)

    setInputDiaria('')

    criarRelatorio()

    }
    return (
        <div className='atividade-container'>
            <h2>Juka Diária</h2>

            <input
                id='inputDiarias'
                type='number'
                placeholder='Número de diárias'
                value={inputDiaria}
                onChange={(e) => setInputDiaria(e.target.value)}
            />

            <button onClick={calcularValorDiaria}>Calcular Valor das diárias</button>

            {infoRelatorio && <ResultJukaDiaria infos={infoRelatorio} />}
            

        </div>
    )
}

export default JukaDiaria
