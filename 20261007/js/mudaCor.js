let btn = document.getElementById("muda")

function sorteiaMatrizCor() {
    let numSorteado = Math.random()
    let numIntervalo = numSorteado*256
    let numInteiro = Math.floor(numIntervalo)
    return numInteiro
    
    //return Math.floor(Math.random()*256)
}

btn.onmouseover = function() {
    document.body.style.backgroundColor =`rgb(${sorteiaMatrizCor()},${sorteiaMatrizCor()},${sorteiaMatrizCor()})`
}