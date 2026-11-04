const btnBuscaCEP = document.querySelector("#buscaCEP")

const carregaCep = async function(url) {
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
}

btnBuscaCEP.addEventListener("click", () => {
    const cepDigitado = document.querySelector("#cep").value
    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`
    carregaCep(url)
/* 
Forma antiga, usando o XMLHttpRequest
    const objAJAX = new XMLHttpRequest()

    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`

    //configurando o objeto XMLHTTPRequest
    objAJAX.open("GET", url)

    // Enviando a requisição
    objAJAX.send()

    // monitorando as alterações do objeto
    objAJAX.onreadystatechange = () => {
        console.log(objAJAX.readyState)
        if(objAJAX.readyState == 4) {
            if(objAJAX.status == 200) {
                let endereco = JSON.parse(objAJAX.responseText)
                console.log(endereco)

                const paragrafoResultado = document.querySelector("#endereco")
                paragrafoResultado.innerHTML = (endereco.logradouro || "Rua não informada")
                paragrafoResultado.innerHTML += "<br>"+ (endereco.bairro || "Bairro não informado")
                paragrafoResultado.innerHTML += "<br>"+ (endereco.localidade || "Cidade não informada")
                paragrafoResultado.innerHTML += "<br>"+ (endereco.estado || "Estado não informado")

            }
        }
    }
        */

/* Usando a Fetch API
    1. Configurar a Fetch com a requisição a ser feita
    2. Configurar o tratamento da promessa de requisicao HTTP (then)
    3. Configurar o tratamento da resposta da requisição (then)
 */
    
    /*
    fetch(url)
        .then(respHttp => {
            console.log(respHttp)
            return respHttp.json()
        }) //resposta do HTTP
        .then(dado => {

            //aqui a gente pode manipular o DOM
            console.log(dado)

        }) // dado produzido pelo servidor
        .catch(erro => {
            console.log(`Deu algum erro: ${erro}`)
        })
            */
})