/*const resultado = document.querySelectorAll("p.texto")

console.log(resultado)
/*
const mudaCorFundo = function() {
    document.body.style.backgroundColor = "#f00";
}

const mudarTamanhoFonte = function() {
    document.body.style.fontSize = "3em";
}

document.body.addEventListener("click", mudaCorFundo)
document.body.addEventListener("click", mudarTamanhoFonte)
//document.body.onclick = mudarTamanhoFonte
*/

const btn = document.querySelector("#adicionar")

const tarefasList = document.querySelector("#tarefas")

//REMOVER ITEM
tarefasList.addEventListener("click", function(pointer) {
    console.log(pointer.target.tagName)
    const elementoClicado = pointer.target
    if(elementoClicado.tagName == "A") {
        const link = elementoClicado
        if(link.classList.contains("remover")) {
            // programar a remoção dos elementos
            const liPaiDoLink = link.parentNode
            console.log(liPaiDoLink)
            liPaiDoLink.remove()
        } else {
            //editar
            editar(link.parentNode)
        }
    } else if(elementoClicado.tagName == "BUTTON") {
        liPai = elementoClicado.parentNode
        //capturar o valor digitado
        const novoTexto = liPai.childNodes[3].value
        
        //atualizar o texto do li
        liPai.textContent = novoTexto

        criaLinks(liPai)
    }
        
})

/**
 * Função para criar os links de Editar e Remover
 * @param {*} parent - HTMLElement onde vai vincular os novos links
 */
const criaLinks = (parent) =>{ 
    const linkEditar = document.createElement("a")
    linkEditar.href= "#"
    linkEditar.textContent = "Editar"
    linkEditar.classList.add("editar")
    const linkRemover = document.createElement("a")
    linkRemover.href= "#"
    linkRemover.classList.add("remover")
    linkRemover.textContent = "Remover"
    parent.append(linkEditar, linkRemover)
}
//ADICIONAR ITEM
btn.addEventListener("click", ()=> {
    //1 recuperar o conteudo digitado no input
    const tarefa = document.querySelector("#tarefa").value
    //2. criar um li associar o texto do input
    const novoLI = document.createElement("li") // >> <li></li>
    novoLI.textContent = tarefa //<li>${tarefa}</li>
    //2.1  criar o link para remoção
    criaLinks(novoLI)
    
    //3. adicionar o novo li no ul#tarefas
    document.querySelector("#tarefas").append(novoLI)
})

// PROGRAME UM EDITAR
const editar = parent => {
    parent.innerHTML += `<input id="editar" placeholder="Edite sua tarefa"><button id="atualizar">Atualizar</button>`
}