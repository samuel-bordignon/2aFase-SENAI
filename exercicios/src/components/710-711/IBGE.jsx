/*7.10 - Foi feita um a pesquisa entre os habitantes de um a região e 
coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
 a maior e a menor altura encontrada; 
 a média de altura das mulheres; 
 a média de altura da população; 
 o percentual de homens na população. */

import React from 'react'
import { useState } from 'react'
import ResultIBGE from './resultIBGE'

function IBGE() {
    const [inputAltura, setInputAltura] = useState('')
    const [inputGenero, setInputGenero] = useState('')
    const [maiorAltura, setMaiorAltura] = useState(0)
    const [menorAltura, setMenorAltura] = useState(0)
    const [mediaAlturaMulheres, setMediaAlturaMulheres] = useState(0)
    const [mediaAlturaPopulacao, setMediaAlturaPopulacao] = useState(0)
    const [percentualHomens, setPercentualHomens] = useState(0)
    const [error, setError] = useState(false)
    const [pessoas, setPessoas] = useState([])
    const [contador, setContador] = useState(1)
    const [resultado, setResultado] = useState('')

    function adicionarPessoa() {
        if (isNaN(inputAltura) || inputAltura <= 0 || inputGenero === '') {
            setError(true)
            return
        }
        setPessoas([...pessoas, { altura: inputAltura, genero: inputGenero }])
        setContador(contador + 1)
        setInputAltura('')
        setInputGenero('')
        setError(false)
    }

    function criarRelatorio() {
        let relatorio = {
            maiorAltura: maiorAltura,
            menorAltura: menorAltura,
            mediaAlturaMulheres: mediaAlturaMulheres,
            mediaAlturaPopulacao: mediaAlturaPopulacao,
            percentualHomens: percentualHomens
        }
        setResultado(relatorio)
    }

    function calcularDados() {
        let maior = 0
        let menor = 0
        let mediaMulheres = 0
        let mediaPopulacao = 0
        let percentual = 0
        let contMulheres = 0
        let contHomens = 0
        let somaAlturaMulheres = 0
        let somaAlturaPopulacao = 0

        pessoas.forEach(pessoa => {
            if (pessoa.altura > maior) {
                maior = pessoa.altura
            }
            if (pessoa.altura < menor || menor === 0) {
                menor = pessoa.altura
            }
            if (pessoa.genero === '1') {
                somaAlturaMulheres += Number(pessoa.altura)
                contMulheres++
            }
            if (pessoa.genero === '0') {
                contHomens++
            }
            somaAlturaPopulacao += Number(pessoa.altura)
        })

        mediaMulheres = somaAlturaMulheres / contMulheres
        mediaPopulacao = somaAlturaPopulacao / pessoas.length
        percentual = (contHomens / pessoas.length) * 100

        setMaiorAltura(maior)
        setMenorAltura(menor)
        setMediaAlturaMulheres(mediaMulheres)
        setMediaAlturaPopulacao(mediaPopulacao)
        setPercentualHomens(percentual)

        criarRelatorio()
    }


    return (
        <div className='atividade-container'>
            <h2>IBGE</h2>
            <p>Digite as informações da pessoa número {contador}</p>
            <div className='form-container' id='container-710'>
                <label htmlFor="inputGenero">Gênero <br />
                    <input
                        id='inputGenero'
                        type='text'
                        placeholder='Digite o gênero da pessoa'
                        value={inputGenero}
                        onChange={(e) => setInputGenero(e.target.value)}
                    />

                </label><br />
                <label htmlFor="inputAltura">Altura <br />
                    <input
                        id='inputAltura'
                        type='number'
                        placeholder='Digite a altura da pessoa'
                        value={inputAltura}
                        onChange={(e) => setInputAltura(e.target.value)}
                    />
                </label>
                {error && <span className='error'>Digite um valor válido</span>}
                {pessoas.length < 10 && <button  onClick={adicionarPessoa}>Adicionar Pessoa</button>}
                {pessoas.length === 10 && <button  onClick={calcularDados}>Calcular Dados</button>}
                {resultado && <ResultIBGE resultado={resultado} />}



            </div>
        </div>
    )
}

export default IBGE
