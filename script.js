
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