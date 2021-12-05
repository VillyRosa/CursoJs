# Curso de Java Script - Curso em Vídeo

## Identificadores
* Podem começar com **letra**, **$** ou **_** ;
* Não podem começar com números ;
* É possível usar **letras** ou **números** ;
* É possível usar **acentos** e **símbolos** ;
* Não podem conter **espaços**;
* Não podem ser **palavras reservadas**.

## Variáveis

### Para criar uma variável

Para criar uma variável começe com **var** ou **let**, dê espaço adicione o nome da variável seguindo as regras de identificadores, adicione o sinal de igual (**=**) seguido pelo valor da variável, para adicionar um texto a variável pode se usar **'valor'**, **"valor"** ou **``valor`**, para adicionar um valor númerico basta digitar o número ex: **59** e para adicionar o valor **true** ou **false** basta digita-los.

~~~javascript
var | let nomeIdentificador = "valor" | 'valor' | `valor` | 1, 2, 3 | true | false
var | let nomeIdentificador = ['valor1', 'valor2', 'valor3'] //Cria um array/vetor com estes valores
var | let nomeIdentificador = [] //Cria um array/vetor vazio
~~~

### Tipos de variáveis

<p>5 | 18 | -12 | 0.5 | -15.9 | 3.14 | 8.0 = <strong>Number</strong></p>
<p>"google" | 'JavaScript' | `Node` = <strong>String</strong></p>
<p>true | false = <strong>Boolean</strong></p>

#### Este comando do Node.js identifica e te retorna o tipo da variável
~~~javascript
typeof NomeDaVariavel
~~~

## Transformar tipos de variáveis

<p>Se você precisar utilizar o valor de uma variável tanto para fazer uma conta ou algo do tipo, você provavelmente precisará transformá la, por exemplo, se você for fazer uma conta você precisará que o valor da variável seja um <strong>Number</strong>.</p>

~~~javascript
Number(NomeVariavel) //Este comando transformará o tipo da variável em um number que o próprio JavaScript achar melhor
Number.parseint(NomeVariavel) //Este comando transformará o tipo da variável para inteiro
Number.parseFloat(NomeVariavel) //Este comando transformará o tipo da variável para real
String(NomeVariavel) | NomeVariavel.toString() //Este comando converte o tipo de uma variável númerica para String
~~~

## Concatenação

<p>É possível fazer concateneção de dois jeitos diferentes, o primeiro é utilizando o sinal de mais (+) para realizala e o segundo é a concatenação com crase ( ` ` ).</p>

### Concatenação com o sinal de ( + )

~~~javascript
var nome = 'Maria'
var idade = 18
console.log(nome + ' tem ' + idade + ' anos de idade.') //Resultaria em Maria tem 18 anos de idade.
~~~

### Concatenação com crase

~~~javascript
var nome = 'Maria'
var idade = 18
console.log(`${nome} tem ${idade} anos de idade`) //Resultaria em Maria tem 18 anos de idade.
~~~

## Alguns comandos

~~~javascript
NomeVariavel.length //Retorna o valor do número de caracteres da variável
NomeVariavel.toUpperCase() //Converte todos os caracteres para maiúsculos
NomeVariavel.toLowerCase() //Converte todos os caracteres para minúsculos
NomeVariavel.toFixed(CasasDesejadas) //Converte o número para o número de casas desejadas
NomeVariavel.replace('O que quer substituir', 'Para o que') //Substitui o texto desejado
NomeVariavel.toLocaleString('pt-Br', {style:'currency'; currency:'BRL'}) //Faz a conversão para dinheiro em real
~~~

## Aritméticos

~~~javascript
5 + 2   // Adição
5 - 2   // Subtração
5 * 2   // Multiplicação
5 / 2   // Divisão
5 % 2   // Mostra o valor restante da divisão
5 ** 2  // Potência
~~~

### Simplificando

~~~javascript
var n = 3

n = n + 1  | n++
n = n - 1  | n--
n = n + 4  | n += 4
n = n - 5  | n -= 5
n = n * 4  | n *= 4
n = n / 2  | n /= 2
n = n % 5  | n %= 5
n = n ** 2 | n **= 2
~~~

### Precedência

#### Os primeiros sinais a serem calculados são estes, seguindo a sequência de cima para baixo

~~~javascript
var n = 3

|  ( )
|  **
|  *, /, %
↓  +, -
~~~





