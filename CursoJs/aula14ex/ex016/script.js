var linicio = window.document.querySelector('input#inicio')
var lfim = window.document.querySelector('input#fim')
var lpasso = window.document.querySelector('input#passo')
var res = window.document.querySelector('p#res')

function contar() {

    var inicio = Number(linicio.value)
    var fim = Number(lfim.value)
    var passo = Number(lpasso.value)

    if (linicio.value.length == 0 || lfim.value.length == 0) {
        res.innerHTML = `Preencha todos os campos`
    } else {
        if (passo == 0) {
            passo++
            window.alert('Passo inválido! Considerando passo como 1')
            lpasso.value = 1
        }
        res.innerHTML = `Contando:`
        for (var contador = inicio; contador >= fim; contador -= passo) {
            res.innerHTML += ` 👉${contador}`
        }
        for (var contador = inicio; contador <= fim; contador += passo) {
            res.innerHTML += ` 👉${contador}`
        }
        res.innerHTML += ` 🏁`
    }

}

function limpar() {

    linicio.value = ''
    lfim.value = ''
    lpasso.value = ''
    res.innerHTML = ''

}