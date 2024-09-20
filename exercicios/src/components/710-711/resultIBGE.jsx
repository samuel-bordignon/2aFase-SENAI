import React from 'react'

function ResultIBGE(props) {
    return (
        <div>
            {props.resultado.maiorAltura}
            {props.resultado.menorAltura}
            {props.resultado.mediaAlturaMulheres}
            {props.resultado.mediaAlturaPopulacao}
            {props.resultado.percentualHomens}
        </div>
    )
}

export default ResultIBGE
