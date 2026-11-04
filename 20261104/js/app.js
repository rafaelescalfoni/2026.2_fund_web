
const criaCard = dados => {
    return  `<div class="card" id="${dados.imdbID}">
      <img src="${dados.Poster}" alt="${dados.Title}">
      <h3>${dados.Title}</h3>
      <p class="card-tipo">${dados.Type}</p>
      <p class="card-ano">${dados.Year}</p>
    </div>`
}

const btnBuscar = document.querySelector("#buscar")

let resultado = []

let ordemAno = document.querySelector("#ordemAno")
let ordemTitulo = document.querySelector("#ordemTitulo")

const carregaEstatisticas = () =>{
/*
•	Quantidade de filmes exibidos
•	Média de ano dos filmes
•	Quantos são filmes, quantos são séries e quantos são games
 */
    const divStats = document.querySelector("#estatisticas")

    let qtdFilmes = (resultado.filter(filme => filme.Type == "movie").length) || 0
    let qtdSeries = (resultado.filter(filme => filme.Type == "series").length) || 0
    let mediaAnos = (resultado.reduce((ac, filme) =>ac+parseInt(filme.Year), 0)/resultado.length) || 0
    divStats.innerHTML = `Quantidade de Filmes exibidos: <strong>${qtdFilmes}</strong><br>
                            Quantidade de Séries exibidas: <strong>${qtdSeries}</strong><br>
                            Média de anos: <strong>${Math.round(mediaAnos)}</strong>`
}

ordemAno.addEventListener("click", () => {
    resultado.sort((a, b) => {
        const yearA = a.Year 
        const yearB = b.Year 
        if(yearA < yearB) return -1
        if(yearA > yearB) return 1
        return 0
    })
    const divLista = document.querySelector("#listaFilmes")
    divLista.innerHTML = resultado.reduce((ac, filme) => ac+criaCard(filme), "")
    carregaEstatisticas()
})

ordemTitulo.addEventListener("click", () => {
    resultado.sort((a, b) => {
        const titleA = a.Title 
        const titleB = b.Title 
        if(titleA < titleB) return -1
        if(titleA > titleB) return 1
        return 0
    })
    const divLista = document.querySelector("#listaFilmes")
    divLista.innerHTML = resultado.reduce((ac, filme) => ac+criaCard(filme), "")
    carregaEstatisticas()
})

btnBuscar.addEventListener("click", () => {
    //criar a url para a fetch
    let busca = document.querySelector("#campoBusca").value

    let tipoFiltro = document.querySelector("#filtroTipo").value
    console.log(tipoFiltro)
    
    url = `https://www.omdbapi.com/?apikey=4f61475f&s=${busca}`

    fetch(url).then(resp => resp.json())
        .then(data => {
            const divLista = document.querySelector("#listaFilmes")
            console.log(data.Search)
            // retorna a lista de filmes/séries que satisfazem o termo de busca
            resultado = data.Search

            if(tipoFiltro){
                resultado = resultado.filter(filme => filme.Type == tipoFiltro)
            }
            //carrega todos os cards na section
            divLista.innerHTML = resultado.reduce((ac, filme) => ac+criaCard(filme), "")

            carregaEstatisticas()
        })
    

})