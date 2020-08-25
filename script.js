function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var saudacao = document.getElementById('saudação')
var data = new Date()
var hora = data.getHours()
//var hora = 14
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <= 12){
    saudacao.innerHTML = "Bom dia!"
    img.src = "img/Manha.jpg"
    document.body.style.background = '#ECE0F8'
}else if (hora >= 12 && hora <= 18){
    saudacao.innerHTML = "Boa tarde!"
    img.src = "img/Tarde.jpg"
    document.body.style.background = '#F5F6CE'
}else {
    saudacao.innerHTML = "Boa noite!"
    img.src = "img/Noite.jpg"
    document.body.style.background = '#BCF5A9'
}
}