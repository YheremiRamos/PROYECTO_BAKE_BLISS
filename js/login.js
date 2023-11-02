//PRIMER COMENTARIO

let btnforgot = document.getElementsByClassName('forgot')[0]
let transicao = document.getElementsByClassName('transicao')[0]
let hello = document.getElementsByClassName('hello')[0]
let textobaixo = document.getElementsByClassName('textobaixo')[0]
let signup = document.getElementsByClassName('signup')[0]
let esquerda = document.getElementsByClassName('esquerda')[0]
let direita = document.getElementsByClassName('direita')[0]

function trocar() {
    btnforgot.style.color = "blue"
    
}
function trocar2() {
    btnforgot.style.color = "black"
}

function trocalado() {
    // let esquerda = document.getElementsByClassName('esquerda')[0].style = "display:none"
    transicao.style.position = "relative"
    transicao.style.left = "-314px"
    transicao.style.animation = "go-back 1s"
    transicao.style.borderRadius = "15px 0px 0px 15px"

    

    hello.innerHTML = "Welcome Back!"
    textobaixo.innerHTML = "To keep connected with us please login with your personal info"
    signup.value = "Login"
    

    var quadradoLogin = document.querySelector('.quadrado-login');
    quadradoLogin.classList.add('expandido');

    signup.addEventListener('click', trocalado2)
    

}





function trocalado2() {
    transicao.style.position = ""
    transicao.style.left = ""
    transicao.style.borderRadius = "0px 15px 15px 0px"
    transicao.style.animation = "go-front 1s"

    

    hello.innerHTML = "Hello, Friend!"
    textobaixo.innerHTML = "Enter your personal details and start journey with us"
    signup.value = "Sign Up"
    signup.removeEventListener('click', trocalado2)
}
