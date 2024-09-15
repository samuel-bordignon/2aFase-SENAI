function MenuPaginas({ totalPaginas, paginaAtual, setPaginaAtual }) {
    const maximoPaginasVisiveis = 5

    
    let inicio = Math.max(1, paginaAtual - Math.floor(maximoPaginasVisiveis / 2))
    let fim = Math.min(totalPaginas, inicio + maximoPaginasVisiveis - 1)

   
    if (fim - inicio + 1 < maximoPaginasVisiveis) {
        inicio = Math.max(1, fim - maximoPaginasVisiveis + 1)
    }

    const paginas = []

    for (let i = inicio; i <= fim; i++) {
        paginas.push(i)
    }
    return (
        <div className="MenuPaginas-container">

            {inicio > 1 && <span>...</span>} {/* Indica que há mais páginas antes */}
            {paginas.map((pagina) => (
                <button id='botao-pagina'
                    key={pagina}
                    className={pagina === paginaAtual ? 'ativa' : ''}
                    onClick={() => setPaginaAtual(pagina)} // Muda para a página clicada
                >
                    {pagina}
                </button>
            ))}
            {fim < totalPaginas && <span>...</span>} {/* Indica que há mais páginas depois */}

        </div>
    )
}

export default MenuPaginas
