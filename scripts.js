

let circulo = document.querySelector(".circulo")
/*DOCUMENT = CHAMA O HTML
QUERY SELECTOR = PROCURA ALGUMA COISA
*/
let imagem = document.querySelector(".starbucks")

function trocarCor(cor){
    circulo.style.backgroundColor = cor
}

function trocaImagem(novaImagem){
    imagem.src = novaImagem
}
