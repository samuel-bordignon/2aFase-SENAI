import React from 'react'
import { useState } from 'react'

function ResultJukaDiaria(props) {
    const [tabela, settabela] = useState({
        valorTotal: 'Valor Total:',
        descontoMoca: 'Desconto do envolvimento emocional:',
        descontoConvenio: 'Desconto do convenio:',
        multa: 'Multa:',
        valorFinal: 'Valor Final:'
    })

    return (
        <div className='tabela-container'>
            <div>
                <h3>{tabela.valorTotal}</h3>
                <h3>{tabela.descontoMoca}</h3>
                <h3>{tabela.descontoConvenio}</h3>
                <h3>{tabela.multa}</h3>
                <h3>{tabela.valorFinal}</h3>
            </div>
            <div>
                <h3>{props.infos.valorTotal}</h3>
                <h3>- {props.infos.descontoMoca}</h3>
                <h3>- {props.infos.descontoConvenio}</h3>
                <h3>+ {props.infos.multa}</h3>
                <h3>{props.infos.valorFinal}</h3>
            </div>
        </div>
    )
}

export default ResultJukaDiaria
