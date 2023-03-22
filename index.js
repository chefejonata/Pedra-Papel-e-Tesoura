const pedra = document.querySelector('.mao__pedra')
const papel = document.querySelector('.mao__papel')
const tesoura = document.querySelector('.mao__tesoura')

const mao = document.querySelector('.mao')

let user = ''

let resultados = [ 'pedra', 'papel', 'tesoura']
var aleatorio = resultados[Math.floor(Math.random() * resultados.length )]

let imgPedra = document.querySelector('.imgPedra')
let imgPapel = document.querySelector('.imgPapel')
let imgTesoura = document.querySelector('.imgTesoura')

const testar = document.querySelector('.jogar__botao')
const novoJogo = document.querySelector('.jogar__novamente')

const Texto = document.querySelector('.titulo__texto')
const bgTexto = document.querySelector('.titulo')

pedra.addEventListener('click', () => {
    
    imgPedra.src = './img/icons8-ok.svg'
    user = pedra.value

    if(user === 'pedra'){
        imgPapel.src = ''
        imgTesoura.src = ''
     }

})

papel.addEventListener('click', () => {
    
    imgPapel.src = './img/icons8-ok.svg'
    user = papel.value

    if(user === 'papel'){
        imgPedra.src = ''
        imgTesoura.src = ''
     }

})

tesoura.addEventListener('click', () => {
    
    imgTesoura.src = './img/icons8-ok.svg'
    user = tesoura.value

    if(user === 'tesoura'){
        imgPapel.src = ''
        imgPedra.src = ''
     }

})


testar.addEventListener('click', () => {
    if(user === ''){
        return
    }else if( user === 'pedra' && aleatorio === 'tesoura'){
        Texto.innerHTML = 'VOCÊ GANHOU!'
        bgTexto.style.backgroundColor = 'green'
        Texto.style.color = 'white'
        mao.innerHTML = ''
        mao.innerHTML = `
        <button class="maos mao__pedra" value="pedra"></button>
        <h1 class='xes'> X </h1>
        <button class="maos mao__tesoura" value="tesoura"></button>
        `

    }else if(user === 'tesoura' && aleatorio === 'papel'){
        Texto.innerHTML = 'VOCÊ GANHOU!'
        bgTexto.style.backgroundColor = 'green'
        Texto.style.color = 'white'
        mao.innerHTML = ''
        mao.innerHTML = `
        <button class="maos mao__tesoura" value="tesoura"></button>
        <h1 class='xes'> X </h1>
        <button class="maos mao__papel" value="papel"></button>
        `

    }else if(user === 'papel' && aleatorio === 'pedra'){
        Texto.innerHTML = 'VOCÊ GANHOU!'
        bgTexto.style.backgroundColor = 'green'
        Texto.style.color = 'white'
        mao.innerHTML = ''
        mao.innerHTML = `
        <button class="maos mao__papel" value="papel"></button>
        <h1 class='xes'> X </h1>
        <button class="maos mao__pedra" value="pedra"></button>
        `

    }else if(user === aleatorio ){
        Texto.innerHTML = 'EMPATE!'
        mao.innerHTML = ''
        mao.innerHTML = `
        <button class="maos mao__${user}" value="${user}"></button>
        <h1 class='xes'> = </h1>
        <button class="maos mao__${aleatorio}" value="${aleatorio}"></button>
        `

    }else{
        Texto.innerHTML = 'VOCÊ PERDEU!'
        bgTexto.style.backgroundColor = 'red'
        Texto.style.color = 'white'
        mao.innerHTML = ''
        mao.innerHTML = `
        <button class="maos mao__${user}" value="${user}"></button>
        <h1 class='xes'> X </h1>
        <button class="maos mao__${aleatorio}" value="${aleatorio}"></button>
        `
        
    }

    testar.style.display = 'none'
    novoJogo.style.display = 'block'

})











