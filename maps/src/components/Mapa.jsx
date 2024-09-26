import React, { useState } from 'react'

function Mapa() {
  const [cepAdicionar, setCepAdicionar] = useState('')
  const [cep1, setCep1] = useState('')
  const [cep2, setCep2] = useState('')
  const [distance, setDistance] = useState(null)
  const [duration, setDuration] = useState(null)
  const [error, setError] = useState(null)
  const [listaEnderecos, setListaEnderecos] = useState([])
  const [listaEnderecosDentroRaio, setListaEnderecosDentroRaio] = useState([])
  const [cepCentral, setCepCentral] = useState('')

  // Função para adicionar um endereço à lista de endereços
  const adicionarEndereco = async () => {
    const endereco = await getEndereco(cepAdicionar)
    if (endereco) {
      setListaEnderecos(prevEnderecos => [...prevEnderecos, endereco])
    }
  }

  // Função para obter o endereço a partir do CEP
  const getEndereco = async (cep) => {
    try {
      const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
      const data = await response.json()
      if (data.status && data.status !== 200) {
        throw new Error('CEP não encontrado.')
      }
      return data
      // Retorna o objeto com as informações do CEP
    } catch (error) {
      console.error('Erro ao obter endereço:', error)
      setError('Erro ao obter o endereço.')
      return null
    }
  }

  // Função para calcular a distância entre dois pontos (coordenadas)
  const calcularDistanciaRaio = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Raio da Terra em metros
    const rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad;
    const dLon = (lon2 - lon1) * rad;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; // Distância em metros
    return distancia;
  }

  // Função para calcular quais endereços estão dentro do raio de 1km
  const cepDentroRaio = async () => {
    const enderecoCentral = await getEndereco(cepCentral)
    if (enderecoCentral) {
      const enderecosDentroRaio = listaEnderecos.filter(endereco => {
        const distancia = calcularDistanciaRaio(
          parseFloat(enderecoCentral.lat),
          parseFloat(enderecoCentral.lng),
          parseFloat(endereco.lat),
          parseFloat(endereco.lng)
        )
        return distancia <= 1000 // Distância máxima de 1km
      })
      setListaEnderecosDentroRaio(enderecosDentroRaio)
    }
  }

  // Função para obter as coordenadas de dois CEPs e calcular a distância entre eles
  const calcularDistanciaRota = async () => {
    const endereco1 = await getEndereco(cep1)
    const endereco2 = await getEndereco(cep2)

    if (endereco1 && endereco2) {
      const osrmProfile = 'car'
      const startPoint = [endereco1.lng, endereco1.lat] // Longitude e Latitude do primeiro CEP
      const endPoint = [endereco2.lng, endereco2.lat] // Longitude e Latitude do segundo CEP

      const veloCaminhada = 1.728 // Velocidade média de caminhada em m/s

      const url = `http://router.project-osrm.org/route/v1/${osrmProfile}/${startPoint.join(',')};${endPoint.join(',')}?overview=false&geometries=polyline`

      try {
        const response = await fetch(url)
        const data = await response.json()
        const route = data.routes[0]
        const distanceInMeters = route.distance
        const distanceInKm = (distanceInMeters / 1000).toFixed(2)
        const durationInHours = (distanceInMeters / veloCaminhada) / 60 / 60

        setDistance(distanceInKm)
        setDuration(durationInHours.toFixed(2))
      } catch (error) {
        console.error('Erro:', error)
        setError('Erro ao calcular a distância.')
      }
    } else {
      setError('Erro ao obter os endereços.')
    }
  }
  // Função para converter segundos em outras unidades de tempo 
  const converterTempo = (segundos) => {
    let unidades = [
      { nome: "segundos", Valor: 1 },
      { nome: "minutos", Valor: 60 },
      { nome: "horas", Valor: 60 * 60 },
      { nome: "dias", Valor: 60 * 60 * 24 },
      { nome: "meses", Valor: 60 * 60 * 24 * 30 },
      { nome: "anos", Valor: 60 * 60 * 24 * 365 },
    ]
    let unidadeEscolhida = ""
    let tempoFinal = 0


    unidades.forEach((unidade) => {
      console.log(unidade)
      if (tempoCorrida >= unidade.Valor) {
        tempoFinal = tempoCorrida / unidade.Valor
        unidadeEscolhida = unidade.nome

      }
    })
    return tempoFinal + " " + unidadeEscolhida;
  }


  return (
    <div>
      <h1>Calcular Distância entre CEPs</h1>
      <div>
        <div id="central-container" className="contaoner">
          <label>
            Adicionar CEP Central:
            <input
              type="text"
              value={cepCentral}
              onChange={(e) => setCepCentral(e.target.value)}
            />
            <button onClick={cepDentroRaio}>Adicionar Endereço Central</button>
          </label>
          {listaEnderecosDentroRaio.length > 0 && (listaEnderecosDentroRaio.map((endereco, index) => (
            <div key={index}>
              <p>{endereco.cep} - {endereco.state}, {endereco.district}, {endereco.city} - {endereco.address}</p>
            </div>
          )))}

        </div>
        <div id="enderecos-adicionar" className="container">
          <label>
            Adicionar CEP:
            <input
              type="text"
              value={cepAdicionar}
              onChange={(e) => setCepAdicionar(e.target.value)}
            />
            <button onClick={adicionarEndereco}>Adicionar Endereço</button>
          </label>
          {listaEnderecos.length > 0 && (listaEnderecos.map((endereco, index) => (
            <div key={index}>
              <p>{endereco.cep} - {endereco.state}, {endereco.district}, {endereco.city} - {endereco.address}</p>
            </div>
          )))}

        </div>
        <div id="enderecos-distancia" className="container">

          <label>CEP 1:</label>
          <input
            type="text"
            value={cep1}
            onChange={(e) => setCep1(e.target.value)}
          />
          <label>CEP 2:</label>
          <input
            type="text"
            value={cep2}
            onChange={(e) => setCep2(e.target.value)}
          />
          <button onClick={calcularDistanciaRota}>Calcular Distância</button>
          {distance && (
            <div>
              <p>Distância: {distance} Km</p>
              <p>Duração (caminhada): {duration} horas</p>
            </div>
          )}

        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Mapa
