/* Questão 1 */

//recuperamos o botao
let btn = document.getElementById("executar01")

//programou o evento "Clique"
btn.onclick = function() {
    //recuperar o input e o paragrafo
    let inputTexto = document.getElementById("texto")
    let paragrafoResultado = document.getElementById("resultado01")
    //recuperou o texto atribuído ao input
    let textoDigitado = inputTexto.value
    let textoInvertido = ""
    
    for(let i=0; i<textoDigitado.length; i++) {
        textoInvertido = textoDigitado[i] + textoInvertido
    }
    

    paragrafoResultado.textContent = textoInvertido
}

/* Questão 2 */
let btn2 = document.getElementById("executar02")
btn2.onclick = function() {
    let inputTexto2 = document.getElementById("texto2")
    let resultado02 = document.getElementById("resultado02")

    let palavra = inputTexto2.value
    //inverter a palavra
    let textoInvertido = ""
    for(let i=0; i<palavra.length; i++) {
        textoInvertido = palavra[i] + textoInvertido
    }   
    let resposta = (palavra.toLowerCase() == textoInvertido.toLowerCase())? "É um palíndromo": "Não é um palíndromo"
    resultado02.textContent = resposta
}