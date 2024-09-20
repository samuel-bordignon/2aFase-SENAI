import React, { useState, useEffect } from 'react'
import ResultJukaDiaria from './ResultJukaDiaria'

function JukaDiaria() {
    const [inputDiaria, setInputDiaria] = useState("")
    const [valorDiaria, setValorDiaria] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)
    const [descontoMoca, setDescontoMoca] = useState(0)
    const [descontoConvenio, setDescontoConvenio] = useState(0)
    const [multa, setMulta] = useState(150) // Multa fixa
    const [valorFinal, setValorFinal] = useState(0)
    const [infoRelatorio, setInfoRelatorio] = useState(null)

    // Função para gerar o relatório assim que os valores mudarem
    useEffect(() => {
        if (valorTotal > 0) { // Garante que o cálculo foi feito antes de gerar o relatório
            const VariavelInfoRelatorio = {
                valorTotal: valorTotal,
                valorDiaria: valorDiaria,
                descontoMoca: descontoMoca,
                descontoConvenio: descontoConvenio,
                multa: multa,
                valorFinal: valorFinal
            }
            setInfoRelatorio(VariavelInfoRelatorio)
        }
    }, [valorTotal, valorDiaria, descontoMoca, descontoConvenio, multa, valorFinal])

    const calcularValorDiaria = () => {
        let dias = Number(inputDiaria)

        // Validação do input
        if (isNaN(dias) || dias <= 0) {
            alert("Por favor, insira um número válido de diárias.")
            return
        }

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
        const valorFinal = valorTotal - descontoMoca - descontoConvenio + multa // Calcula o valor final

        // Atualize os estados com os novos valores
        setValorDiaria(valorDiaria)
        setValorTotal(valorTotal)
        setDescontoMoca(descontoMoca)
        setDescontoConvenio(descontoConvenio)
        setValorFinal(valorFinal)

        setInputDiaria('') // Limpa o input após o cálculo
    }

    return (
        <div className='atividade-container'>
            <div className="form-container">
                <h2>Juka Diária</h2>
                <div className='btn-inpt-container'>
                    <input
                        id='inputDiarias'
                        type='number'
                        placeholder='Número de diárias'
                        value={inputDiaria}
                        onChange={(e) => setInputDiaria(e.target.value)}
                    />

                    <button className='btn-form' onClick={calcularValorDiaria}>Calcular Valor das diárias</button>

                </div>

            </div>

            {infoRelatorio && <ResultJukaDiaria infos={infoRelatorio} />}
        </div>
    )
}

export default JukaDiaria
