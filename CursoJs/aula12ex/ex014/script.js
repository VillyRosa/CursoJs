function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours() 
    var min = data.getMinutes()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#F4AA5E'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#455866'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#232427'
    }
}