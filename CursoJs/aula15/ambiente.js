var num = [5, 8, 2, 4] //Primeira posição do array sempre é 0

num.push(1)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor por inteiro é ${num}`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)

var pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado no array`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}