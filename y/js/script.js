
var radio = document.querySelector('.manual-btn')
var count = 1

document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaimg()

},10000)

function proximaimg(){
    count++

    if(count > 3){
        count = 1
    }
    document.getElementById('radio'+count).checked = true

}

// validação login
function logar(){
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin" ){
        alert("Logado com sucesso")
        location.href = "admpage.html"
    }else{
        alert("Usuário ou senha incorretos")
    }
}

// cadastro

var form = document.getElementById("form")
var nameInput = document.getElementById("usuario-cad")
// var senhaInput = document.