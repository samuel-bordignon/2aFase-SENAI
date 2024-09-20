import React from 'react'

function ResultJukaDiaria(props) {

    return (
        <div className='tabela-container'>
            <div className='tabela-description'>
                <p>Valor Total:</p>
                <hr />
                <p>Desconto do convenio:</p>
                <p>Desconto do envolvimento emocional:</p>
                <p>Valor da diária:</p>
                <p>Multa:</p>
                <hr />
                <p>Valor Final:</p>
            </div>
            <div className='tabela-numbers'>
                <p>{props.infos.valorTotal}</p>
                <hr />
                <p className='verde'>- {props.infos.descontoConvenio}</p>
                <p className='verde'>- {props.infos.valorDiaria}</p>    
                <p className='vermelho'>+ {props.infos.descontoMoca}</p>
                <p className='vermelho'>+ {props.infos.multa}</p>
                <hr />
                <p>{props.infos.valorFinal}</p>
            </div>
        </div>
    )
}

export default ResultJukaDiaria
