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
        // programar a remoção dos elementos
        const liPaiDoLink = elementoClicado.parentNode
        console.log(liPaiDoLink)
        liPaiDoLink.remove()
    }
        
})

//ADICIONAR ITEM
btn.addEventListener("click", ()=> {
    //1 recuperar o conteudo digitado no input
    const tarefa = document.querySelector("#tarefa").value
    //2. criar um li associar o texto do input
    const novoLI = document.createElement("li") // >> <li></li>
    novoLI.textContent = tarefa //<li>${tarefa}</li>
    //2.1  criar o link para remoção
    const link = document.createElement("a")
    link.href= "#"
    link.textContent = "Remover"
    novoLI.append(link)
    //3. adicionar o novo li no ul#tarefas
    document.querySelector("#tarefas").append(novoLI)
})

// PROGRAME UM EDITAR