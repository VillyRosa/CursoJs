var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if (Number(n) <= 100 && Number(n) >= 0) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos]) {
                maior = valores[pos]
            }
            if (menor > valores[pos]) {
                menor = valores[pos]
            }
        }
        var media = soma / tot

        res.innerHTML = ''
        if (tot == 1){
            res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados.</p>`
        } else {
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        }
        res.innerHTML += `<p>O maior valor informado é o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é o ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores resulta em ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores resulta em ${media}.</p>`
    }
}

function limpar() {
    valores = []
    res.innerHTML = ''
    lista.innerHTML = ''
    num.value = ''
    num.focus()
}