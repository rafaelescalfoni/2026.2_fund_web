/**
 * 
 * @param {*} pai - Elemento pai 
 * @param {*} tipoElemento - string referente ao elemento que quero criar
 * @param {*} propriedades - objeto de propriedades
 */
const criaElemento = (pai, tipoElemento, propriedades, classes) => {
    const novoElemento = document.createElement(tipoElemento)
    
    /*
    propriedades será um parâmetro que receberá um objeto. Este objeto não tem um conjunto definido de chaves, então é preciso iterá-lo para pegar cada chave e valor associado. USE for ... in
    */
    for(prop in propriedades ) {
        //prop retorna a chave do objeto
        //propriedades[prop] retorna o valor associado à chave
        // esta iteração vai setar todos os valores do elemento com as propriedades passadas. Ao chamar criaElemento, é preciso assegurar que as propriedades são válidas para o elemento HTML em construção
        novoElemento[prop] = propriedades[prop]
    }
    
    if(classes) novoElemento.classList.add(classes)
    pai.append(novoElemento)
}

filmes.forEach(filme => {
    //1. criar um div.filme
    const divFilme = document.createElement("div")
    divFilme.classList.add("filme")
    //2. criar um img.filme-figura
    criaElemento(divFilme, "img", {src:filme.figura, alt:filme.titulo}, "filme-figura")
    //3. criar um h2.filme-titulo
    criaElemento(divFilme, "h2", {textContent:filme.titulo}, "filme-titulo")
    //4. criar um div.filme-classificacao
    criaElemento(divFilme, "div", {textContent:filme.classificacao}, "filme-classificacao")
    //5. criar um p.filme-generos
    criaElemento(divFilme, "p", {textContent:filme.generos.join(", ")}, "filme-generos")
    
    //6. adicionar o novo elemento no div.catalogo
    document.querySelector(".catalogo").append(divFilme)
})
/*
<div class="filme">
            <img src="" alt="" class="filme-figura">
            <h2 class="filme-titulo"></h2>
            <div class="filme-classificacao"></div>
            <p class="filme-generos"></p>
        </div>
        */